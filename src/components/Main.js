import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import moose from '../images/moose.jpg'
import rhino from '../images/rhino.jpg'

class Main extends Component {
    render() {
        let beasts=[{name:'moose',image:moose,desc:'lives in america and it is endangered'},
        {name:'rhino',image:rhino,desc:'lives in africa and it is endangered'}]
        return (
            <>
                {
                    beasts.map(elem=>{
                    return <HornedBeasts title={elem.name} description={elem.desc} imgSrc={elem.image} />
                    })
                }
            </>
        )
    }
}

export default Main
