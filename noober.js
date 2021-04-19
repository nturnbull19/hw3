// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Store passenger details in memory
  let passengerName = ride.passengerDetails
  // Store pickup info in memory
  let passengerPickup = ride.pickupLocation
  // Store dropoff info in memory
  let passengerDrop = ride.dropoffLocation

  // Check the service level required
  let passengerService = ride.purpleRequested
  let passengerNum = ride.numberOfPassengers

  // Check if Purple upgrade has been selected
  if (passengerService == true) {
    passengerService = `Purple`
  // If Purple not selected, check to see XL is needed
  } else if (passengerNum > 3) {
    passengerService = `XL`
  // Go to default X service
  } else {
    passengerService = `X`
  }

  // Display readable details on console
  console.log(`Noober ${passengerService} Passenger: ${passengerName.first} ${passengerName.last} - ${passengerName.phoneNumber}. Pickup at ${passengerPickup.address}, ${passengerPickup.city}, ${passengerPickup.state} ${passengerPickup.zip}. Drop off at ${passengerDrop.address}, ${passengerDrop.city}, ${passengerDrop.state} ${passengerDrop.zip}.`)

  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
