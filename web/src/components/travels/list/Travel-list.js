import TravelItem from "./Travel-item";
import travelService from "../../../services/travel.service"
import { useState, useEffect } from 'react'

function TravelList () {
    const [travels, setTravels] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
       fetchTravels()
    }, [])

    function fetchTravels () {
        travelService.list()
        .then(travels => { setTravels(travels) })
        .catch(error => {
            console.error(error)})
    }

    return(
        <>
        <h1>Get inspired by the community</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, velit quis maximus scelerisque, erat velit condimentum arcu, sed cursus nulla erat a elit. Nullam a ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere ante ex, non pellentesque massa aliquet gravida. Vestibulum placerat mi tortor, eget imperdiet nulla gravida eu. Integer facilisis nulla nec vehicula tincidunt. Nunc eget ex ullamcorper, dapibus quam a, mattis lectus. Maecenas ultrices tempor iaculis. Etiam vestibulum ut ante sed fermentum. In aliquet nibh ac nibh molestie tempus. Morbi non justo tellus. Phasellus blandit suscipit suscipit.

Curabitur posuere eros nec molestie hendrerit. Duis rutrum at mauris vitae rhoncus. Aenean congue, nisl eget fermentum malesuada, tellus tortor mollis est, sit amet sodales dolor erat eu urna. Nulla auctor augue sed magna pretium vehicula. Aenean lacinia, sem quis aliquet varius, orci turpis dapibus lectus, congue tempus ipsum turpis sit amet arcu. Sed aliquet in orci sit amet porttitor. Vestibulum convallis ante sit amet nunc viverra tincidunt.

In hac habitasse platea dictumst. Mauris ac augue vitae nisl luctus pulvinar at at nulla. Suspendisse potenti. Nam dui orci, euismod vitae dui et, gravida elementum lorem. Aenean volutpat volutpat congue. Nullam aliquet molestie nisi auctor volutpat. Mauris lacinia rutrum rutrum. Cras ornare arcu vel lectus placerat ultricies. Phasellus blandit diam mi. Vestibulum mi felis, ultricies vitae nisl at, fringilla maximus ipsum. Aliquam sed urna vitae odio lobortis molestie. Etiam aliquam est dignissim consectetur vestibulum. Integer a condimentum leo, eu cursus ligula. Praesent sed mattis dui, in bibendum est. Integer feugiat leo vitae orci scelerisque tempus.

Duis eget purus interdum, rutrum massa ac, imperdiet mi. Integer commodo dolor at tortor blandit, sed tempus tellus maximus. Sed rhoncus lacus et lacus ultrices, eu finibus nisl consequat. Donec imperdiet nec eros eget posuere. Pellentesque quis tellus quis turpis commodo varius. Phasellus tellus est, finibus quis egestas at, vehicula vel urna. Ut ornare metus nec mi auctor lacinia. Quisque ac viverra nulla, sed ornare nisi. Cras pulvinar elementum nisl.

Quisque viverra malesuada ligula ut tristique. Proin non justo lectus. Maecenas sit amet consequat erat. In ligula velit, dictum nec libero at, pulvinar consequat odio. Fusce rhoncus suscipit eros. Fusce rutrum lorem ante, et ultrices magna semper ut. Sed ut lorem in ipsum ullamcorper imperdiet.</p>
        <div className="container row">
            {travels.map(travel => 
                <TravelItem key={travel.id} {...travel}/>
            )}
        </div>
        </>
    )
}

export default TravelList