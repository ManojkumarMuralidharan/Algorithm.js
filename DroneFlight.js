// You are planning the amount of fuel need to complete a drone flight.
// To fly higher, the drone burns 1 liter of fuel per feet. However, flying lower charges the drone with 
// the amount of energy equivalent to 1 liter of fuel for every feet. Flying sideways takes no energy 
// (only flying up and down takes/charges energy).

// Given an array of 3D coordinates named route, find the minimal amount of fuel the drone would need to 
// fly through this route.Explain and code the most efficient solution possible, with the minimal number 
// of actions and variables.

// Example:
// Completing the route [{x:0, y:2, z:10}, {x:3, y:5, z:0}, {x:9, y:20, z:6}, {x:10, y:12, z:15}, {x:10, y:10, z:8}] 
// requires a minimum of 5 liters of fuel.

// flying up - 1 liter of fuel per feet
// flying down - gives me 1 charge equivalent to 1 lit fuel
// flying sideway - no energy






/*
 *  i/p - array of co-ords  [ {x , y ,z } ]
 *  o/p - is an min fuel value
 */
function droneFlightPlanner(coords) {

    var max_req_energy = 0,
        base_energy = 0;
    if (coords.length === 1) {
        return max_req_energy;
    } else {
        current_z_index = coords[0].z;
    }
    coords.map(function(element, index) {
        if (index === 0) {
            continue;
        }
        if (current_z_index < element.z) {

            base_energy -= element.z;
            if (base_energy < 0) {
                var abs_value = Math.abs(base_energy);
                if (abs_value > max_req_energy) {
                    max_req_energy = abs_value;
                }
            }

        } else if (current_z_index > element.z) {
            base_energy += element.z;
        }

        current_z_index = element.z;

    })

    return max_req_energy;
}


// Thoughts
// route
// sample i / p

//     [{ x: 0, y: 2, z: 10 }, { x: 3, y: 5, z: 0 }, { x: 9, y: 20, z: 6 }, { x: 10, y: 12, z: 15 }, { x: 10, y: 10, z: 8 }]

// z - axis - up and down

// x and y - left and right

// element fuel exp
//     [0](0 + 2) * 0 + (diff(0, 10)) - > 0[1](3 + 5) * 0 + (diff(prevcord, currentcord) diff(10, 0)) * 1 = +10 liters[2](9 + 20) * 0 + (diff(0, 6)) * 1 = 10 - 6 = 4 //-6liters
//     [3](10 + 12) * 0 + (diff(6, 15)) * 1 = 4 - 9 = -5 //-9liters
//     [4](10 + 10) * 0 + (diff(15, 8)) * 1 = -5 + 7 = 2 //7liters

// -- -- -- --
// total = 0 + 10 - 6 - 9 + 7 = 17 - 15 = 2

// z: 10 z: 0 z: 6 z: 15 z: 8 -
//     5 +
//     2 = 5


// max_required_energy = 0
// start off with 0 base_energy
// iterate though the co - ords
// if (current_z_value < next_z_value) // curr 0  -> next 10 
// {
//     reduce from base_energy //BE = -10
//     //check if this is greater than max_required
//     if (reduced base_energy < 0) {
//         //Yeah I need extra energy
//         check absolute value of reduced base_energy with max_required 10 vs 0
//         if (abs(reduced_energy) > max_required) {
//             update max_required 10
//         }
//     }
// } else if (current_z_value > next_z_value) { //curr 0 -> next 6
//     add to energy
// }


// [0]

// [1] 10 > 0 be = 10 cz = 0[2] 0 < 6



// def calcFuel(points):
//     startHeight = points[0]['z']
// heighestPoint = max(p['z']
//     for p in points)
// return heighestPoint - startHeight