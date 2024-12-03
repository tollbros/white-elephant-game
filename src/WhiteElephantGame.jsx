import React, { useState } from 'react';
import { Gift, Snowflake, TreePine, Heart, Sparkles, CandyCane, Gem, Star, User, Lock } from 'lucide-react';
import Card from './components/card';
import { Alert, AlertDescription } from './components/alert';
import gift1 from './images/gift1.jpg';

const WhiteElephantGame = () => {
  const basePlayers = [
    "Aaron Cocks", "Alyssa Piselli", "Brian Corchiolo", "Carter Knight",
    "Christopher Munden", "Charles Niedringhaus", "Connor Parahus",
    "Christine Robinson", "Cheyenne Scott", "Snow Vongsakulvong",
    "Elaine Andrus", "Francesca DiPlacido", "Gabi Cox", "Gaston Soto",
    "Holly Milnes", "Justina Akpali", "Jack Amsterdam", "Jen Barthelemy",
    "Joe Ogletree", "Jennifer Reshetar", "Kristen Mang", "Kaylee Richard",
    "Katrina Siske", "Kristen Tomaselli", "Lori Tusiano", "Mike Abramson",
    "Michael Duarte", "Myles Hohman", "Paul Corey", "Pam Jackson",
    "Phillip Ramirez", "Pieter Vandenburg", "Rachel Colletti", "Reeba Ivan",
    "Sean Gibbons", "Sabrina McGarrity", "Sara Meixner", "Shelby Montes de Oca",
    "Tara Gartland", "Tammy Hill", "Trevor Naskiewicz", "Vince Suriani"
  ];

  const giftNames = [
    "Bluetooth Speaker", "Chair Heating Pad", "Essential Oil Diffuser", "Glass Food Containers", "Travel Coffee Tumbler", "Candle Warmer", "Fondue Pot", "Flower Pot", 
    "Welcome Door Sign", "Candle", "Charcuterie Board", "Catch Phrase Game", "Pickleball Set", "Cocktail Shaker Set", "Coffee Java Sok", "Movie Night Popcorn Kit", "Headache Relief Hat", "3-in-1 Can Koozie",
    "Massage Gun", "Dumpster Fire Travel Mug", "Holiday Home Puzzle", "Popcorn Maker", "Coffee Mug", "Code Name Game", "Hot Dog Toaster", "Back Massager", "Blanket", "Eagles Desk Pad", "Rechargable Hand Warmers",
    "Himalayan Salt Lamp", "Holiday Waffle Maker", "Snoop Dogg Cook Book", "Mug Warmer", "Veggie Chopper", "Packing Cubes", "Stanley Wine Tumbler", "Charging Phone Stand", "Mini Crock Pot", 
    "Portable Charger", "What Do You Meme? Game", "Light Up Turkey Hat", "Grilling Tool Set"
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
  
  const totalGifts = 42; // Declare totalGifts before using it in the gifts array

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
  const imageFileName = `gift${index + 1}.jpg`; // Assumes images are named gift1.jpg, gift2.jpg, etc.
  return {
    id: index + 1,
    isUnwrapped: false,
    name: giftNames[index] || `Gift #${index + 1}`,
    imageUrl: images[imageFileName] || `/api/placeholder/${120}/${120}`, // Fallback to placeholder
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
        <h2 className="text-2xl font-bold mb-4">Game Summary</h2>
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
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-600">
                      {gift ? (
                        <>
                          {gift.name} {/* Display the final name of the gift */}
                          {isGiftLocked(gift.id) && ' 🔒'}
                          {stealCounts[gift.id] > 0 && ` (Stolen ${stealCounts[gift.id]}x)`}
                        </>
                      ) : (
                        'No Gift'
                      )}
                    </p>
                  </div>
                  <Gift className="text-red-500" size={24} />
                </div>
              </Card>
            ))}
        </div>
        <button 
          onClick={() => setShowSummary(false)}
          className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-600"
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

  const getPlayersWithGifts = () => {
    return players
      .filter(player => getCurrentPlayerGift(player))
      .sort((a, b) => a.localeCompare(b));
  };

  const getPlayersWithoutGifts = () => {
    return players
      .filter(player => !getCurrentPlayerGift(player))
      .sort((a, b) => a.localeCompare(b));
  };

  return (
    <div className="p-4">
      <div className="mb-6">
      <div className="flex flex-col items-center mb-6">
  <h2 className="text-3xl font-bold text-center">MOPS White Elephant Gift Exchange</h2>
  {gameEnded && (
    <button 
      onClick={() => setShowSummary(true)}
      className="mt-2 px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-900"
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
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
    const isLocked = isGiftLocked(gift.id);
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
    className={`h-[300px] w-full flex flex-col justify-between ${
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
      <p className="text-xs font-medium">
        {isUnwrapped ? unwrappedGift.name : `Gift #${gift.id}`}
      </p>
      {stealCounts[gift.id] > 0 && (
  <p className="text-xs mt-1 font-bold">
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
