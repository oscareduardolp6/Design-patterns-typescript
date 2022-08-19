import { Coordinate } from "./Coordinate";
import { Route } from "./Route";

type RouteStrategy = (origin: Coordinate, destiny: Coordinate) => Route

const WalkingStrategy: RouteStrategy = (origin, destiny) => []

const CarStrategy: RouteStrategy = (origin, destiny) => []

const origin: Coordinate = { x: 5, y: 7 }
const destiny: Coordinate = {x: 7, y: 5 }

const route = CarStrategy(origin, destiny) 