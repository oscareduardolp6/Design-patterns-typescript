interface Observable {
  attach(observer: Observer): void 
  detach(observer: Observer): void 
  notify<T>(event: myEvent<T>): void 
}
// ----------------------------
interface Observer<> {
  update<T>(event: myEvent<T>): void 
}

type myEventTypes = 
    'Book Added' 
  | 'Book Sell'


type myEvent<T> = {
  type: myEventTypes
  message?: string 
  info?: T
}

// -----------------------------
class Tienda implements Observable {
  private observers: Observer[] = []
  private books: string[] = [] 
  
  attach(observer: Observer): void {
    const exists = this.observers.includes(observer) 
    if(exists) return console.log('Already in observer')
    console.log('Observer added')
    this.observers.push(observer) 
  }
  
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)
    if(observerIndex === -1) return console.log("Observer doesn't exists")
    this.observers.splice(observerIndex, 1)
    console.log('Observer deleted')
  }

  notify<T>(e: myEvent<T>): void {
    console.log('Notifing');
    for (const observer of this.observers) {
      observer.update(e)
    }
  }

  getBooks(): string[] {
    return [...this.books]
  }

  addBook(book: string) {
    this.notify({ type: 'Book Added' })
    this.books.push(book) 
  }

  sellBook(book: string) {
    this.notify({
      type: 'Book Sell', 
      info: {
        bookTitle: 'Libro 1', 
        price: 500
      }
    })
    const indexOfBook = this.books.indexOf(book) 
    this.books.splice(indexOfBook, 1)
  }
}
// ---------------------------------

class Comprador implements Observer {
  update(event: myEvent<never>): void {
    if(event.type === 'Book Added') 
      console.log('Ya llegó el libro que quieres') 
  }
}

class Consecionario implements Observer {
  update(event: myEvent<any>): void {
    if(event.type === 'Book Sell') {
      const { info } = event
      console.log();
      
    }
  }
}