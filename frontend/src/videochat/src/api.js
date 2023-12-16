const newRoomEndpoint = `https://el7a2ny.daily.co/rooms`;

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available.
 */
async function createRoom(doctor,patient) {
  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  var room ={url:"shity"}

  const options = {
    properties: {
      exp: exp,
    },
    
    name: `${doctor}-${patient}`,
  };
  console.log(options.name)
    let response = await fetch("https://api.daily.co/v1/rooms", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 32b5992ab544240587f983fa5990680db3e04e5f4804d7972ed0e5959ad9fd39'

    },
      method: 'POST',
      body: JSON.stringify(options),
      mode: 'cors',
    })
  room= await response.json();
  if(room.url){

  return room;
  }else{
    console.log(room)
   room= await joinRoom(doctor,patient)
   return room
   
  }

  // Comment out the above and uncomment the below, using your own URL
  // return { url: 'https://your-domain.daily.co/hello' }
}


const joinRoom = async (doctor,patient) => {
  const response = await fetch(`https://api.daily.co/v1/rooms/${doctor}-${patient}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 32b5992ab544240587f983fa5990680db3e04e5f4804d7972ed0e5959ad9fd39'
    },
    body: JSON.stringify({
      properties: {
        start_video_off: true
      },

    })
  });
  const data = await response.json();
 
  return data;
}



















export default { createRoom,joinRoom };
