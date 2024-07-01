import React from 'react';

const Character = (props) => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {props.data.name}</h5>
          <div className="card-text">Gender: {props.data.gender}</div>
          <div className="card-text">Skin Color: {props.data.skin_color}</div>
          <div className="card-text">Hair Color: {props.data.hair_color}</div>
          <div className="card-text">Height: {props.data.height} </div>
          <div className="card-text">Eye Color: {props.data.eye_color}</div>
          <div className="card-text">Mass: {props.data.mass}</div>
          <div className="card-text">Homeworld: {props.data.homeworld}</div>
          <div className="card-text">Birth Year: {props.data.birth_year}</div>
        </div>
        <div
          className="card-footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <small className="text-muted">
            Added: {props.data.addedTimestamp}
          </small>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => props.handleDelete(props.data._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
};

export default Character;
