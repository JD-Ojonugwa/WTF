import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import data from "../../data/reviewData"
import ReviewList from '../ReviewList'
import ReviewStats from "../ReviewStats";
import { FaHouseDamage } from "react-icons/fa";
import Button from '../layout/Button';


const AllReviews = () => {
  const [review, setReview] = useState(data);
  const navigate = useNavigate()

  // function to delete a review
  const deleteReview = (id) =>{
    if(window.confirm('Are you sure, you want to delete this review?')){
      setReview(review.filter((item) => item.id !== id))
    }
  }

  return (

    <div className="container">
      <ReviewStats reviews={review} /> 
      <ReviewList reviews={review} deleteReview={deleteReview} />

      <Button type='button' variant='secondary' onClick={() => navigate("/review")}>
          Go Back to Review
      </Button>

      <div className="about-link">
        <Link to="/">
            <FaHouseDamage size={40} /> 
        </Link>
      </div>
    </div>
  )
}

export default AllReviews