import { Coordinate } from "./Coordinate"
import { Route } from "./Route"
// --------------------------------------------
interface RouteStrategy {
  calculteRoute(origin: Coordinate, destiny: Coordinate): Route
}
//--------------------------------------------------
class Context {
  constructor(private strategy: RouteStrategy) {}

  public set Strategy(strategy: RouteStrategy) {
    this.strategy = strategy 
  }

  public getRoute(origin: Coordinate, destiny: Coordinate): Route {
    return this.strategy.calculteRoute(origin, destiny) 
  }
}
// ----------------------------------------------------------------------
class WalkingStrategy implements RouteStrategy {
  calculteRoute(origin: Coordinate, destiny: Coordinate): Route {
    const route: Route = [
      {x: 5, y: 5}
    ]
    return route; 
  }
}
// -----------------------------------------------------------------------
class CarStrategy implements RouteStrategy {
  calculteRoute(origin: Coordinate, destiny: Coordinate): Route {
    return [
      { y: 7, x: 10 }
    ]
  }
}
// ------------------------------------------------------------------------

const context = new Context(new WalkingStrategy())
const origin_: Coordinate = { x: 100, y: 200 }
const destiny: Coordinate = { x: 120, y: 500 }
console.log(`Estrategia moviendose en auto: ${context.getRoute(origin_, destiny)}`);

