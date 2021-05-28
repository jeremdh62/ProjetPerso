import React, { useState } from 'react';

import '../styles/Items.css'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

// api data
import {fortniteAr} from '../config/configAPI';

const Fortnite = fortniteAr[0];

const cosmeticsAPI = (cosmetics , setCosmetic) => {
  Fortnite.CosmeticsNew('fr')
.then(res => {
  setCosmetic(res.data.items);
  //console.log(res);
}).catch(err => {
  console.log(err);
})
}

const Items = () => {
    const [cosmetics, setCosmetic] = useState([]);
    if(cosmetics.length === 0){
      cosmeticsAPI(cosmetics, setCosmetic); 
  }  

    return (
        <div className="root">
            {cosmetics.map((cosmetic,i) => (
              <Card className="card">
              <CardHeader className={cosmetic.rarity.value} title={cosmetic.name} subheader={cosmetic.description}/>
              <CardMedia
                  className="media"
                  image={cosmetic.images.icon}
                  title={i}
              />
            </Card>
            ))}

        </div>
    );
};

export default Items;