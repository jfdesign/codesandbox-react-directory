import React from "react";

export default function List({ people }) {
  function getPeople() {
    return people.map(function(person, i) {
      return (
        <div className="person" key={i}>
          <h2>
            {person.name} | {person.title_cat}
          </h2>
          <div className="content">
            <img src={person.img} style={{ float: "right", width: "20%" }} />
            <div className="bio">{person.bio}}</div>
          </div>
        </div>
      );
    });
  }

  return <div className="listC">{getPeople()}</div>;
}
