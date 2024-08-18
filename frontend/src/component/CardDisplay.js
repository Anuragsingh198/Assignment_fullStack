import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useValue } from '../context/ContextProvider';
import { GetCardByBranchName, GetCards } from '../Action/GetCards';
import CircularProgress from '@mui/material/CircularProgress';

const CardDisplay = () => {
    const [displayCards, setDisplayCards] = useState([]);
    const { state: { card, Cards, loading , search}, dispatch } = useValue();

    console.log('Cart data form  display is ', card)
    useEffect(() => {
        GetCards(dispatch);
        GetCardByBranchName(dispatch , search);
    }, [dispatch , search]);
    console.log(search)
    useEffect(() => {
        if (card) {
            setDisplayCards(card); 
        } else if (Cards.length > 0) {
            setDisplayCards(Cards);
        }
        console.log('Cart data form  display is ', displayCards)
    }, [card, Cards ]);

    return (
        <div style={{ position: 'relative', margin: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: "center", width: '70%', left: '15%' }}>
            {
                loading ? (
                    <CircularProgress />
                ) : displayCards.length > 0 ? (
                    displayCards.map((item, index) => (
                        <Card key={index} branch={item.title} description={item.description} />
                    ))
                ) : "No Cards Available"
            }
        </div>
    );
};

export default CardDisplay;
