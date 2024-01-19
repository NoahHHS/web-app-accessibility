import React, { Component, useState, useEffect } from 'react';
import '../../stylesheets/Profiel.css'

export class ProfielEdit extends Component {
    static displayName = ProfielEdit.name;

    constructor(props) {
      super(props);
      this.state = {
        userData: {
          Naam: '',
          Email: '',
          Beschikbaarheid: '',
          Straatnaam: '',
          Huisnummer: '',
          Postcode: '',
          Stad: '',
          Ziekte: '',
          Hulpmiddelen: ''
        },
      };
    }

  render() {
    return (
      <div>
        <h1 className='pagetitle'>Bewerk Gegevens</h1>
        <section className='profiel-section'>
          <h2 className='subtitle profielh2'>Persoonlijke gegevens</h2>
          <DataItem value="Naam" aria-label='Naam invoerveld, voer hier je naam in'/>
          <DataItem value="Email" aria-label='Email invoerveld, voer hier je email in'/>
          <DataItem value="Beschikbaarheid" aria-label='Beschikbaarheid invoerveld, voer hier je beschikbaarheid in'/>
        </section>
        <section className='profiel-section'>
        <h2 className='subtitle profielh2'>Adres</h2>
          <DataItem value="Straatnaam" aria-label='Straatnaam invoerveld, voer hier je straatnaam in'/>
          <DataItem value="Huisnummer" aria-label='huisnummer invoerveld, voer hier de bijhorende huisnummer in'/>
          <DataItem value="Postcode" aria-label='Postcode invoerveld, voer hier je postcode in, geen spaties'/>
          <DataItem value="Stad" aria-label='Stad invoerveld, voer hier in, in welke stad je woont'/>
        </section>
        <section className='profiel-section'>
        <h2 className='subtitle profielh2'>Medische gegevens</h2>
          <DataItem value="Ziekte" aria-label='Ziekte invoerveld, voer hier je Ziektes in, onderschijd de ziektes met een komma en een spatie'/>
          <DataItem value="Hulpmiddelen" aria-label='Hulpmiddelen invoerveld, voer de hulpmiddelen in die je gebruikt, onderschijd de middelen met een komma en spatie'/>
        </section>
        <SaveButton/>
      </div>
    );
  }
}

const SaveButton = () => {
    return(
      <div className='ProfileButton-Content'>
        <button className='ProfileButton' title='Sla veranderingen op'><strong>Save</strong></button>
        <p className='ProfileButton-Warning'>Sla je veranderingen op!<br/>anders worden ze ongedaan gemaakt</p>
      </div>
    );
}

const DataItem = (prop) => {
  return(
    <div className='DataItem'>
      <p className='DataItem-Name'>{prop.value}</p>
      <input id='info-name' className="DataItem-Field" type="text" placeholder={prop.value}/>
    </div>
  );
}