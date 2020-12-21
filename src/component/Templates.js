import React, { useState }  from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function Templates() {
	const [style, setStyle] = useState("/component/template1.css");
	// const [key, setKey] = useState('/template3-2.css');
  
    return (
        <span>
			<link rel="stylesheet" href={style} />
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={style} onSelect={(k) => setStyle(k)} >
            <Tab eventKey="/component/template1.css" title="Raw"></Tab>

          </Tabs>
        {/* 
          <DropdownButton variant="secondary"  key={1} id="dropdown-basic-button" title="Modèles" >
              <Dropdown.Item eventKey="/template3-2.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 1</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-3.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 2</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-5.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 3</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-4.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 4</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-7.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 5</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-6.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 6</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-1.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 7</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-8.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 8</Dropdown.Item>
          </DropdownButton> */}
        </span>
    );
  }

  export default Templates;