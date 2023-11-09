import { useFetchTripsQuery, useAddTripMutation } from "../store";
//import { useState } from 'react';
import Button from "./Button";
import TripListItem from './TripListItem'
//import InputForm from "./InputForm";

function TripList () {
  //const {showForm, setShowForm} = useState();

  const { data, error, isFetching } = useFetchTripsQuery();

  const [addTrip, results] = useAddTripMutation();

  const handleAddTripName = () => {
    addTrip()
  }

  let content;
  if (isFetching) {
    content = <div>Loading</div>
  } else if (error) {
    console.log(error)
    content = <div>Error loading trips</div>
  } else {
    content = data.map(trip => {
      return <TripListItem key={trip.id} trip={trip} />
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold">Trip List</h1>
        <Button onClick={handleAddTripName} loading={results.isLoading}>
          + Add Trip
        </Button>
      </div>
        {content}
    </div>
    )
}

export default TripList;