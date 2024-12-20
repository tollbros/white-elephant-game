import React, { useState } from 'react';
import { Gift, Snowflake, TreePine, Heart, Sparkles, CandyCane, Star, User, Lock } from 'lucide-react';
import Card from './components/card';
import { Alert, AlertDescription } from './components/alert';
// import gift1 from './images/gift1.jpg';

const WhiteElephantGame = () => {
  const basePlayers = [ "Aaron Cocks", "Alexis Dorr", "Alyssa Piselli", "Andy Espinoza", 
    "Brian Corchiolo", "Carter Knight", "Cheyenne Scott", "Charles Niedringhaus", 
    "Christopher Munden", "Christine Robinson", "Connor Parahus", "Francesca DiPlacido", 
    "Gaston Soto", "Holly Milnes", "Jack Amsterdam", "Jen Barthelemy", "Jennifer Reshetar", 
    "Joe Ogletree", "Justina Akpali", "Kaylee Richard", "Katrina Siske", "Kristen Mang", 
    "Michael Duarte", "Myles Hohman", "Pam Jackson", "Phillip Ramirez", "Pieter Vandenburg", 
    "Rachel Colletti", "Reeba Ivan", "Sabrina McGarrity", "Sara Meixner", "Sean Gibbons", 
    "Shelby Montes de Oca", "Snow Vongsakulvong", "Tara Gartland", "Tammy Hill", "Vince Suriani"
  ];
  
  
  const giftNames = [
    "Bluetooth Speaker",       // gift1
    "Chair Heating Pad",       // gift2
    "Essential Oil Diffuser",  // gift3
    "Glass Food Containers",   // gift4
    "10oz Yeti Tumbler",       // gift5
    "What Do You Meme?",       // gift6
    "Fondue Pot",              // gift7
    "Flower Pot",              // gift8
    "Door Sign",               // gift9
    "Balsam & Cedar Candle",   // gift10
    "Charcuterie Tray",        // gift11
    "Catch Phrase",            // gift12
    "Pickleball Set",          // gift13
    "Cocktail Shaker Set",     // gift14
    "Coffee Javasok",          // gift15
    "Mini Crockpot",           // gift16
    "Stanley Wine Tumbler",    // gift17
    "3-in-1 Insulated Can Koozie", // gift18
    "Massage Gun",             // gift19
    "Smores Maker",            // gift20
    "Electric Candle Lighters",// gift21
    "Popcorn Maker",           // gift22
    "Luggage Scales",          // gift23
    "Lego Car",                // gift24
    "Tile Tracker",            // gift25
    "Carhartt Hat",            // gift26
    "Blanket",                 // gift27
    "Eagles Desk Pad",         // gift28
    "Rechargable Hand Warmers",// gift29
    "Himalayan Salt Lamp",     // gift30
    "Holiday Waffle Maker",    // gift31
    "Snoop Dogg Cookbook",     // gift32
    "Mug Warmer",              // gift33
    "Veggie Chopper & Slicer", // gift34
    "Mini Space Heater",       // gift35
    "40oz Water Bottle",       // gift36
    "Packing Cubes"            // gift37
  ];
  
  
  const giftLinks = [
    "https://a.co/d/iANm6vx", // Bluetooth Speaker - gift1
    "https://a.co/d/5ZEWLrB", // Chair Heating Pad - gift2
    "https://a.co/d/1AcVGT4", // Essential Oil Diffuser - gift3
    "https://a.co/d/aIlPHu9", // Glass Food Containers - gift4
    "https://a.co/d/1BNWH5e", // 10oz Yeti Tumbler - gift5
    "https://a.co/d/4gb0ptw", // What Do You Meme? - gift6
    "https://a.co/d/hN0MCnV", // Fondue Pot - gift7
    "https://a.co/d/e6z78ib", // Flower Pot - gift8
    "https://a.co/d/g4AyxDK", // Door Sign - gift9
    "https://a.co/d/4WzGaxD", // Balsam & Cedar Candle - gift10
    "https://a.co/d/0NnLiq3", // Charcuterie Tray - gift11
    "https://a.co/d/3DazynN", // Catch Phrase - gift12
    "https://a.co/d/goKmJHb", // Pickleball Set - gift13
    "https://a.co/d/9aEy4ui", // Cocktail Shaker Set - gift14
    "https://a.co/d/7lI6JDf", // Coffee Javasok - gift15
    "https://a.co/d/9rWBwJN", // Mini Crockpot - gift16
    "https://a.co/d/hD17Tis", // Stanley Wine Tumbler - gift17
    "https://a.co/d/a41SHmt", // 3-in-1 Insulated Can Koozie - gift18
    "https://a.co/d/9XAfHhO", // Massage Gun - gift19
    "https://a.co/d/1EQmPRj", // Smores Maker - gift20
    "https://a.co/d/c2eoRrW", // Electric Candle Lighters - gift21
    "https://a.co/d/bwiwd4Z", // Popcorn Maker - gift22
    "https://a.co/d/0Brj9p7", // Luggage Scales - gift23
    "https://a.co/d/8g8lF69", // Lego Car - gift24
    "https://a.co/d/6Zh6zQc", // Tile Tracker - gift25
    "https://a.co/d/9fDMaAt", // Carhartt Hat - gift26
    "https://a.co/d/e6uYV0Y", // Blanket - gift27
    "https://a.co/d/6jI9AZP", // Eagles Desk Pad - gift28
    "https://a.co/d/cfOVzli", // Rechargable Hand Warmers - gift29
    "https://a.co/d/3pXu3BN", // Himalayan Salt Lamp - gift30
    "https://a.co/d/2tw9nKI", // Holiday Waffle Maker - gift31
    "https://a.co/d/bhznkh1", // Snoop Dogg Cookbook - gift32
    "https://a.co/d/62gbzlk", // Mug Warmer - gift33
    "https://a.co/d/h0hbfOp", // Veggie Chopper & Slicer - gift34
    "https://a.co/d/09FHrDm", // Mini Space Heater - gift35
    "https://a.co/d/9Q4m4rF", // 40oz Water Bottle - gift36
    "https://a.co/d/ejXOndu"  // Packing Cubes - gift37
  ];
    
  // Randomize player order on initial load
  const [players] = useState(() => {
    return [...basePlayers].sort(() => Math.random() - 0.5);
  });

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [unwrappedGifts, setUnwrappedGifts] = useState([]);
  const [selectedGift, setSelectedGift] = useState(null);
  const [stolenPlayer, setStolenPlayer] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [stealCounts, setStealCounts] = useState({});
  const [justStolen, setJustStolen] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [finalPick, setFinalPick] = useState(false); // Tracks if it's the final pick phase
  const firstPlayer = players[0]; // Save the first player before shuffling
  
  const totalGifts = 37; // Declare totalGifts before using it in the gifts array

 // Function to dynamically import all images from the `/images` folder
  const importAllImages = (requireContext) => {
  const images = {};
  requireContext.keys().forEach((key) => {
    const fileName = key.replace('./', ''); // Strip the './' from the key
    images[fileName] = requireContext(key);
  });
  return images;
};

  // Import all images from the `/images` folder
  const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  // Dynamically create the gifts array
  const gifts = Array.from({ length: totalGifts }, (_, index) => {
    const imageFileName = `gift${index + 1}.jpg`;
    return {
      id: index + 1,
      isUnwrapped: false,
      name: giftNames[index] || `Gift #${index + 1}`,
      imageUrl: images[imageFileName] || `/api/placeholder/${120}/${120}`,
      link: giftLinks[index] || "#", // Add the link property
      ownedBy: null,
    };
  });

  const currentPlayer = stolenPlayer || players[currentPlayerIndex];
  
  const getCurrentPlayerGift = (player) => {
    return unwrappedGifts.find(gift => gift.ownedBy === player);
  };

  const isGiftLocked = (giftId) => {
    return (stealCounts[giftId] || 0) >= 2;
  };

  const [zoomedGiftId, setZoomedGiftId] = useState(null);  

  const exportSummary = (format = "csv") => {
    const summaryData = players.map((player) => {
      const gift = getCurrentPlayerGift(player);
      return {
        name: player,
        gift: gift ? gift.name : "No Gift",
        link: gift ? gift.link : "",
      };
    });
  
    let content;
    let fileName;
  
    if (format === "json") {
      content = JSON.stringify(summaryData, null, 2);
      fileName = "white_elephant_summary.json";
    } else if (format === "csv") {
      // Create CSV header
      content = "Name,Gift,Link\n";
      content += summaryData
        .map(({ name, gift, link }) => {
          // Escape commas and quotes in values
          return `"${name}","${gift}","${link}"`;
        })
        .join("\n");
      fileName = "white_elephant_summary.csv";
    } else {
      // Default to TXT
      content = summaryData
        .map(({ name, gift, link }) => `${name}: ${gift}${link ? ` - ${link}` : ""}`)
        .join("\n");
      fileName = "white_elephant_summary.txt";
    }
  
    const blob = new Blob([content], { type: format === "json" ? "application/json" : "text/plain" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleUnwrap = (giftId) => {
    if (gameEnded) return;
    if (finalPick && currentPlayer !== firstPlayer) return; // Only the first player can play during the final pick phase
    if (unwrappedGifts.find((g) => g.id === giftId)) return;
  
    const gift = gifts.find((g) => g.id === giftId);
    if (gift && !gift.isUnwrapped) {
      setZoomedGiftId(giftId); // Set the zoomed gift
      setTimeout(() => setZoomedGiftId(null), 3000); // Reset zoom after 3 seconds
  
      const updatedGift = { ...gift, ownedBy: currentPlayer };
      const newUnwrappedGifts = [...unwrappedGifts, updatedGift];
      setUnwrappedGifts(newUnwrappedGifts);
      setSelectedGift(updatedGift);
      console.log(selectedGift);
  
      if (stolenPlayer) {
        setStolenPlayer(null);
        setJustStolen(null);
      } else if (!finalPick) {
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
      }
  
      const updatedGiftsMap = new Map(newUnwrappedGifts.map((g) => [g.ownedBy, g]));
      if (players.every((player) => updatedGiftsMap.has(player))) {
        if (!finalPick) {
          setFinalPick(true); // Start the final pick phase
          setCurrentPlayerIndex(0); // Set current player back to the first player
        } else {
          setGameEnded(true);
          setShowSummary(true);
        }
      }
    }
  };
  
  const handleSteal = (giftId) => {
    if (gameEnded) return;
  
    // Restrict actions for non-first players during the final pick phase
    if (finalPick && currentPlayer !== firstPlayer) return;
  
    // Handle "keep gift" option during final pick (when giftId is null or undefined)
    if (finalPick && (!giftId || !unwrappedGifts.some((g) => g.id === giftId))) {
      setGameEnded(true); // End the game
      setShowSummary(true); // Show the game summary
      return;
    }
  
    // Handle stealing logic during final pick
    if (finalPick) {
      const stolenGift = unwrappedGifts.find((g) => g.id === giftId);
      if (stolenGift && stolenGift.ownedBy !== currentPlayer) {
        const previousOwner = stolenGift.ownedBy;
  
        // Swap the gifts
        const updatedGifts = unwrappedGifts.map((g) => {
          if (g.id === giftId) {
            return { ...g, ownedBy: currentPlayer }; // Assign stolen gift to the first player
          }
          if (g.ownedBy === currentPlayer) {
            return { ...g, ownedBy: previousOwner }; // Assign first player's gift to the previous owner
          }
          return g; // Keep other gifts unchanged
        });
  
        setUnwrappedGifts(updatedGifts);
        setGameEnded(true); // End the game
        setShowSummary(true); // Show the summary
        return;
      }
    }
  
    // Normal steal logic for non-final pick phase
    const stolenGift = unwrappedGifts.find((g) => g.id === giftId);
    if (stolenGift && stolenGift.ownedBy !== currentPlayer) {
      setZoomedGiftId(giftId); // Set the zoomed gift
      setTimeout(() => setZoomedGiftId(null), 3000); // Reset zoom after 3 seconds
  
      const previousOwner = stolenGift.ownedBy;
      const updatedGifts = unwrappedGifts.map((g) =>
        g.id === giftId ? { ...g, ownedBy: currentPlayer } : g
      );
  
      setUnwrappedGifts(updatedGifts);
      setSelectedGift(stolenGift);
      setStolenPlayer(previousOwner);
      setJustStolen(giftId);
  
      setStealCounts((prev) => ({
        ...prev,
        [giftId]: (prev[giftId] || 0) + 1,
      }));
  
      if (!stolenPlayer) {
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
      }
  
      const updatedGiftsMap = new Map(updatedGifts.map((g) => [g.ownedBy, g]));
      if (players.every((player) => updatedGiftsMap.has(player))) {
        if (!finalPick) {
          setFinalPick(true); // Start the final pick phase
          setCurrentPlayerIndex(0); // Set current player back to the first player
        } else {
          setGameEnded(true);
          setShowSummary(true);
        }
      }
    }
  };

  const canStealGift = (giftId, owner) => {
    if (gameEnded) return false;
    if (isGiftLocked(giftId)) return false;
    if (giftId === justStolen) return false;
    if (owner === currentPlayer) return false;
    return currentPlayer === stolenPlayer || !stolenPlayer;
  };

  if (showSummary) {
    return (
      <div className="p-4">
        <h2 className="text-2xl text-center font-bold mb-4">White Elephant Gift Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players
            .map(player => ({
              name: player,
              gift: getCurrentPlayerGift(player)
            }))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, gift }) => (
              <Card key={name} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-teal-900">{name}</p>
                    <p className="text-m text-gray-500">
                    {gift ? (
                     <>
                      <span>{gift.name}</span>
                      {gift.link && (
                       <a
                        href={gift.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-900 underline ml-2"
                        >
                       Buy Gift Here
                       </a>
                       )}
                      {isGiftLocked(gift.id) && " 🔒"}
                      {stealCounts[gift.id] > 0 && ` (Stolen ${stealCounts[gift.id]}x)`}
                      </>
                      ) : (
                      "No Gift"
                    )}
                    </p>
                  </div>
                  <Gift className="text-rose-800" size={24} />
                </div>
              </Card>
            ))}
           
           <div className="flex justify-center gap-4 mt-4">
  <button
    onClick={() => exportSummary("csv")}
    className="px-4 py-2 bg-rose-800 text-white rounded hover:bg-rose-400"
  >
    Export as CSV
  </button>
  <button
    onClick={() => exportSummary("json")}
    className="px-4 py-2 bg-teal-900 text-white rounded hover:bg-teal-500"
  >
    Export as JSON
  </button>
</div>

        </div>
        <button 
          onClick={() => setShowSummary(false)}
          className="mt-4 px-4 py-2 bg-rose-800 text-white rounded hover:bg-rose-400"
        >
          Back to Game
        </button>
      </div>
    );
  }

  const getStatus = () => {
    if (gameEnded) {
      return "Game Over! Everyone has a gift!";
    }
    if (finalPick) {
      return `${firstPlayer}, it's your final turn! Steal a gift (you'll swap gifts with its owner) or keep yours!`;
    }
    if (stolenPlayer) {
      return `${stolenPlayer}'s gift was stolen! ${stolenPlayer}, you can steal another gift or unwrap a new one!`;
    }
    return `${currentPlayer}, you can steal an unwrapped gift or unwrap a new one!`;
  };

  const getPlayerStatus = (player) => {
    if (gameEnded) return 'bg-indigo-900 text-white';
    if (player === currentPlayer) return 'bg-teal-900 text-white';
    if (player === stolenPlayer) return 'bg-rose-500 text-white';
    if (getCurrentPlayerGift(player)) return 'bg-teal-900 text-white';
    return 'bg-gray-200';
  };

  // const getPlayersWithGifts = () => {
  //   return players
  //     .filter(player => getCurrentPlayerGift(player))
  //     .sort((a, b) => a.localeCompare(b));
  // };

  const getPlayersWithoutGifts = () => {
    return players
      .filter(player => !getCurrentPlayerGift(player))
      .sort((a, b) => a.localeCompare(b));
  };

  return (
    <div className="p-4">
      <div className="mb-6">
      <div className="flex flex-col items-center mb-6">
  <h2 className="text-3xl font-bold text-center">MOPs White Elephant Gift Exchange</h2>
  {gameEnded && (
    <button 
      onClick={() => setShowSummary(true)}
      className="mt-2 px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-500"
    >
      View Summary
    </button>
  )}
</div>
        
        <Alert className={`mb-4 ${gameEnded ? 'bg-blue-100' : ''}`}>
          <User className="h-4 w-4" />
          <AlertDescription>
  {getStatus()}

  {/* Add "Keep My Gift" button during the final pick phase */}
  {finalPick && currentPlayer === firstPlayer && (
    <div className="mt-4 text-center">
      <button
        onClick={() => handleSteal(null)} // Trigger "keep gift" logic
        className="px-4 py-2 bg-teal-900 text-white rounded hover:bg-green-600"
      >
        Keep My Gift
      </button>
    </div>
  )}
</AlertDescription>
        </Alert>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Current Player</h3>
          <div className="flex gap-2 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-sm ${getPlayerStatus(currentPlayer)}`}>
              {currentPlayer}
            </span>
          </div>
        </div>

        <div className="mb-4">
  <h3 className="text-lg font-semibold mb-2">Players with Gifts</h3>
  <div className="flex gap-2 flex-wrap">
    {players
      .filter((player) => unwrappedGifts.some((g) => g.ownedBy === player))
      .map((player) => {
        const gift = unwrappedGifts.find((g) => g.ownedBy === player); // Get the player's gift
        return (
          <div key={player} className="flex flex-col items-center">
            {/* Player Bubble */}
            <span className="px-3 py-1 rounded-full text-sm bg-rose-800 text-white">
              {player}
            </span>
            {/* Gift Name Below */}
            <p className="text-sm text-black-800 mt-1">
              {gift ? gift.name : 'No Gift'}
            </p>
          </div>
        );
      })}
  </div>
</div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Players Waiting for Gifts</h3>
          <div className="flex gap-2 flex-wrap">
            {getPlayersWithoutGifts().map((player) => (
              <span key={player} className={`px-3 py-1 rounded-full text-sm ${getPlayerStatus(player)}`}>
                {player}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">  {gifts.map((gift) => {
    const unwrappedGift = unwrappedGifts.find((g) => g.id === gift.id);
    const isUnwrapped = !!unwrappedGift;
    // const isLocked = isGiftLocked(gift.id);
    const canSteal = isUnwrapped && canStealGift(gift.id, unwrappedGift?.ownedBy);
    const canUnwrap = !isUnwrapped && (currentPlayer === stolenPlayer || !stolenPlayer);

   // Randomized colors, sizes, and icons
   const colors = ["bg-rose-800", "bg-indigo-900", "bg-pink-300", "bg-teal-900", "bg-blue-300" ];
   const textColors = ["text-amber-400", "text-slate-400", "text-red-600", "text-blue-300", "text-pink-600"];
   const iconSizes = [48, 98, 38, 76, 52, 64];
   const icons = [Gift, Snowflake, TreePine, Sparkles, CandyCane, Heart, Star];
      

   const colorClass = colors[gift.id % colors.length];
    const textColorClass = textColors[gift.id % textColors.length];
    const iconSize = iconSizes[gift.id % iconSizes.length];
    const IconComponent = icons[gift.id % icons.length]; // Define the icon dynamically

    return (
<Card
  key={gift.id}
  className={`relative cursor-pointer transition-transform duration-500 ${
    zoomedGiftId === gift.id ? 'transform scale-150 z-10' : ''
  } ${
    (!canSteal && !canUnwrap) || gameEnded ? 'opacity-50 cursor-not-allowed' : ''
  }`}
  onClick={() => {
    if (!canSteal && !canUnwrap) {
      return;
    }
  
    setZoomedGiftId(gift.id); // Set the zoomed gift
  
    setTimeout(() => {
      // Ensure only the current zoomed gift is reset
      if (zoomedGiftId === gift.id) {
        setZoomedGiftId(null);
      }
    }, 3000);
  
    isUnwrapped ? handleSteal(gift.id) : handleUnwrap(gift.id);
  }}
>
  <div
    className={`h-[350px] w-full flex flex-col justify-between ${
      isUnwrapped ? 'bg-white' : colorClass
    }`}
  >
    {/* Icon or Image */}
    <div className="flex-grow relative flex items-center justify-center">
      {!isUnwrapped ? (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dynamically render the icon */}
          <IconComponent size={iconSize} className={textColorClass} />
        </div>
      ) : (
        <img
          src={gift.imageUrl}
          alt={`Gift ${gift.id}`}
          className="w-full h-full object-cover"
        />
      )}
    </div>

    {/* Footer: Player Name, Gift Name, and Steal Info */}
    <div className="bg-gray-900 bg-opacity-75 text-white p-2 flex flex-col items-center">
      {isUnwrapped && <p className="text-sm font-bold">{unwrappedGift?.ownedBy}</p>}
      <p className="text-s font-medium">
        {isUnwrapped ? unwrappedGift.name : `Gift #${gift.id}`}
      </p>
      {stealCounts[gift.id] > 0 && (
  <p className="text-s mt-1 font-bold">
    {stealCounts[gift.id] === 1 && (
      <span className="text-yellow-300">Stolen Once</span>
    )}
    {stealCounts[gift.id] === 2 && (
      <span className="text-red-500">
        Stolen Twice
        <Lock className="inline-block ml-1 text-red-500" size={15} />
      </span>
    )}
  </p>
      )}
    </div>
  </div>
</Card>
    );
  })}
</div>
    </div>
  );
};

export default WhiteElephantGame;