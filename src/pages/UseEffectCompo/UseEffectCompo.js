import React, { Component } from 'react'
import axios from 'axios'

class UseEffectCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios.get('https://ajax-fdba16.appdrag.site/api/getAllArticles', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    })
      .then((response) => {
        console.log(response.data.Table);
        this.setState({ data: response.data.Table });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className='container'>
        <h1>Hello UseEffect</h1>
        {
          data && data.map((row) => ( // pareil que: data?.map((row))....
            <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
              <h2>{row.title}</h2>
              <p>{row.articles}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default UseEffectCompo
