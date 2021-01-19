import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import{  getCategories,searchRestaurants} from '../redux/actions/dataAction'; 
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import '../css/restaurant.css'
import InputGroup from 'react-bootstrap/InputGroup';

import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Restaurants=(props)=> {
    const {categories,collection}=props;
    const [keyword,setKeyword]=useState("Shiv Sagar")
    useEffect(() => {  
            props.getCategories()
      },[]);
      /*useEffect(() => {  
        props.getRestaurants()   
  },[restaurants]);*/
  
      const showCategories=categories[0] !==undefined?(
         
  <div>
      {console.log(categories)}
      {console.log(collection)}
  </div>
      ):(null)

     const handleSubmit=(e)=>{
        e.preventDefault();
        if(keyword !== '')
        {
            props.searchRestaurants(keyword)
        }
    }

    return (
          
    )
}
Restaurants.propTypes={
    getCategories : PropTypes.func.isRequired,
    searchRestaurants:PropTypes.func.isRequired,
    categories:PropTypes.array.isRequired,
    collection:PropTypes.array.isRequired,
}

const mapStateToProps = (state) =>({
    categories:state.data.categories,
    collection:state.data.collection


})
const mapActionToProps = {
    getCategories,searchRestaurants
}

export default connect(mapStateToProps , mapActionToProps)(Restaurants);