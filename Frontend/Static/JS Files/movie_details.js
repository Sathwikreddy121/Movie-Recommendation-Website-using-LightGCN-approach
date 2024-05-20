document.addEventListener('DOMContentLoaded', function() {
  const movieDetailsDiv = document.getElementById('movie-details');
  const selectTag = document.getElementById('select-tag');
  const selectRating = document.getElementById('select-rating');
  const enterYear = document.getElementById('enter-year');
  
  // Sample JSON data representing movies
  const movies = [
    {
      "title": "Star Trek (2009)",
      "tag": "sci-fi",
      "ratings": 4.5,
      "timestamp": "05:19:17",
      "imdb_id": 796366,
      "tmdb_id": 13475.0
    },
    {
      "title": "Matrix, The (1999)",
      "tag": "sci-fi",
      "ratings": 2.0,
      "timestamp": "04:21:20",
      "imdb_id": 133093,
      "tmdb_id": 603.0
    },
    {
      "title": "Animatrix, The (2003)",
      "tag": "sci-fi",
      "ratings": 4.5,
      "timestamp": "21:06:42",
      "imdb_id": 328832,
      "tmdb_id": 55931.0
    },
    {
      "title": "Avatar (2009)",
      "tag": "politics",
      "ratings": 5.0,
      "timestamp": "02:28:03",
      "imdb_id": 499549,
      "tmdb_id": 19995.0
    },
    {
      "title": "Chronicles of Narnia: Prince Caspian, The (2008)",
      "tag": "fantasy",
      "ratings": 4.0,
      "timestamp": "20:11:44",
      "imdb_id": 499448,
      "tmdb_id": 2454.0
    },
    {
      "title": "Cowboy Bebop: The Movie (Cowboy Bebop: Tengoku no Tobira) (2001)",
      "tag": "sci-fi",
      "ratings": 4.0,
      "timestamp": "10:41:24",
      "imdb_id": 275277,
      "tmdb_id": 11299.0
    },
    {
      "title": "Interstellar (2014)",
      "tag": "sci-fi",
      "ratings": 4.5,
      "timestamp": "04:07:11",
      "imdb_id": 816692,
      "tmdb_id": 157336.0
    },
    {
      "title": "The Butterfly Effect (2004)",
      "tag": "sci-fi",
      "ratings": 5.0,
      "timestamp": "12:56:22",
      "imdb_id": 289879,
      "tmdb_id": 1954.0
    },
    {
      "title": "JFK (1991)",
      "tag": "politics",
      "ratings": 4.0,
      "timestamp": "14:02:33",
      "imdb_id": 102138,
      "tmdb_id": 820.0
    },
    {
      "title": "Bob Roberts (1992)",
      "tag": "politics",
      "ratings": 4.0,
      "timestamp": "20:04:54",
      "imdb_id": 103850,
      "tmdb_id": 10608.0
    },
    {
      "title": "Predator (1987)",
      "tag": "sci-fi",
      "ratings": 4.0,
      "timestamp": "03:16:27",
      "imdb_id": 93773,
      "tmdb_id": 106.0
    },
    {
      "title": "Primary Colors (1998)",
      "tag": "politics",
      "ratings": 2.5,
      "timestamp": "13:21:52",
      "imdb_id": 119942,
      "tmdb_id": 9440.0
    },
    {
      "title": "Argo (2012)",
      "tag": "politics",
      "ratings": 4.5,
      "timestamp": "01:59:31",
      "imdb_id": 1024648,
      "tmdb_id": 68734.0
    },
    {
      "title": "Nixon (1995)",
      "tag": "politics",
      "ratings": 3.0,
      "timestamp": "12:54:07",
      "imdb_id": 113987,
      "tmdb_id": 10858.0
    },
    {
      "title": "Star Wars: Episode IV - A New Hope (1977)",
      "tag": "sci-fi",
      "ratings": 4.5,
      "timestamp": "10:30:08",
      "imdb_id": 76759,
      "tmdb_id": 11.0
    },
    {
      "title": "American President, The (1995)",
      "tag": "politics",
      "ratings": 2.5,
      "timestamp": "17:57:17",
      "imdb_id": 112346,
      "tmdb_id": 9087.0
    },
    {
      "title": "Candidate, The (1972)",
      "tag": "politics",
      "ratings": 3.5,
      "timestamp": "13:00:29",
      "imdb_id": 68334,
      "tmdb_id": 21711.0
    },
    {
      "title": "Inception (2010)",
      "tag": "sci-fi",
      "ratings": 2.5,
      "timestamp": "04:54:47",
      "imdb_id": 1375666,
      "tmdb_id": 27205.0
    },
    {
      "title": "Avatar (2009)",
      "tag": "sci-fi",
      "ratings": 4.0,
      "timestamp": "16:13:15",
      "imdb_id": 499549,
      "tmdb_id": 19995.0
    },
    {
      "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
      "tag": "sci-fi",
      "ratings": 5.0,
      "timestamp": "18:21:05",
      "imdb_id": 80684,
      "tmdb_id": 1891.0
    },
    {
      "title": "Hunting of the President, The (2004)",
      "tag": "politics",
      "ratings": 2.5,
      "timestamp": "18:02:42",
      "imdb_id": 391225,
      "tmdb_id": 26254.0
    },
    {
      "title": "Jumanji (1995)",
      "tag": "fantasy",
      "ratings": 4.0,
      "timestamp": "22:51:30",
      "imdb_id": 113497,
      "tmdb_id": 8844.0
    },
    {
      "title": "American History X (1998)",
      "tag": "politics",
      "ratings": 4.5,
      "timestamp": "02:50:39",
      "imdb_id": 120586,
      "tmdb_id": 73.0
    },
    {
      "title": "Legally Blonde 2: Red, White & Blonde (2003)",
      "tag": "politics",
      "ratings": 2.0,
      "timestamp": "12:59:05",
      "imdb_id": 333780,
      "tmdb_id": 10327.0
    },
    {
      "title": "Star Wars: Episode IV - A New Hope (1977)",
      "tag": "sci-fi",
      "ratings": 4.0,
      "timestamp": "00:13:21",
      "imdb_id": 76759,
      "tmdb_id": 11.0
    },
    {
      "title": "Constant Gardener, The (2005)",
      "tag": "politics",
      "ratings": 4.0,
      "timestamp": "14:08:44",
      "imdb_id": 387131,
      "tmdb_id": 1985.0
    },
    {
      "title": "Lord of the Rings: The Return of the King, The (2003)",
      "tag": "fantasy",
      "ratings": 5.0,
      "timestamp": "19:43:08",
      "imdb_id": 167260,
      "tmdb_id": 122.0
    },
    {
      "title": "2001: A Space Odyssey (1968)",
      "tag": "sci-fi",
      "ratings": 5.0,
      "timestamp": "06:00:47",
      "imdb_id": 62622,
      "tmdb_id": 62.0
    },
    {
      "title": "Weather Underground, The (2002)",
      "tag": "politics",
      "ratings": 4.0,
      "timestamp": "17:22:07",
      "imdb_id": 343168,
      "tmdb_id": 14108.0
    },
    {
      "title": "Inside Job (2010)",
      "tag": "politics",
      "ratings": 5.0,
      "timestamp": "19:50:29",
      "imdb_id": 1645089,
      "tmdb_id": 44639.0
    },
    {
      "title": "Terminator 2: Judgment Day (1991)",
      "tag": "sci-fi",
      "ratings": 2.0,
      "timestamp": "04:53:52",
      "imdb_id": 103064,
      "tmdb_id": 280.0
    },
    {
      "title": "The Hunger Games: Mockingjay - Part 2 (2015)",
      "tag": "politics",
      "ratings": 3.5,
      "timestamp": "20:11:17",
      "imdb_id": 1951266,
      "tmdb_id": 131634.0
    },
    {
      "title": "Fahrenheit 9/11 (2004)",
      "tag": "politics",
      "ratings": 4.0,
      "timestamp": "15:29:26",
      "imdb_id": 361596,
      "tmdb_id": 1777.0
    },
    {
      "title": "War Room, The (1993)",
      "tag": "politics",
      "ratings": 3.0,
      "timestamp": "22:56:05",
      "imdb_id": 108515,
      "tmdb_id": 26408.0
    },
    {
      "title": "Sintel (2010)",
      "tag": "fantasy",
      "ratings": 3.5,
      "timestamp": "06:47:44",
      "imdb_id": 1727587,
      "tmdb_id": 45745.0
    },
    {
      "title": "Terminator Salvation (2009)",
      "tag": "sci-fi",
      "ratings": 4.0,
      "timestamp": "05:26:14",
      "imdb_id": 438488,
      "tmdb_id": 534.0
    },
    {
      "title": "Missing (1982)",
      "tag": "politics",
      "ratings": 4.0,
      "timestamp": "03:36:00",
      "imdb_id": 84335,
      "tmdb_id": 15600.0
    },
    {
      "title": "Grumpier Old Men (1995)",
      "tag": "old",
      "ratings": 2.5,
      "timestamp": "01:57:37",
      "imdb_id": 113228,
      "tmdb_id": 15602.0
    },
    {
      "title": "Garden State (2004)",
      "tag": "psychology",
      "ratings": 4.0,
      "timestamp": "02:53:54",
      "imdb_id": 333766,
      "tmdb_id": 401.0
  },
  {
      "title": "Henry V (1989)",
      "tag": "psychology",
      "ratings": 4.0,
      "timestamp": "14:18:48",
      "imdb_id": 97499,
      "tmdb_id": 10705.0
  },
  {
      "title": "Othello (1995)",
      "tag": "psychology",
      "ratings": 3.5,
      "timestamp": "01:24:24",
      "imdb_id": 114057,
      "tmdb_id": 16420.0
    },
    {
      "title": "Do the Right Thing (1989)",
      "tag": "psychology",
      "ratings": 4.0,
      "timestamp": "18:01:24",
      "imdb_id": 97216,
      "tmdb_id": 925.0
    },
    {
      "title": "Big Lebowski, The (1998)",
      "tag": "psychology",
      "ratings": 5.0,
      "timestamp": "05:50:50",
      "imdb_id": 118715,
      "tmdb_id": 115.0
    },
    {
      "title": "Straight Story, The (1999)",
      "tag": "brothers",
      "ratings": 4.0,
      "timestamp": "18:46:52",
      "imdb_id": 166896,
      "tmdb_id": 404.0
    },
    {
      "title": "Blade Runner 2049 (2017)",
      "tag": "cinematography",
      "ratings": 5.0,
      "timestamp": "17:27:43",
      "imdb_id": 1856101,
      "tmdb_id": 335984.0
    },
    {
      "title": "Game, The (1997)",
      "tag": "psychological",
      "ratings": 4.5,
      "timestamp": "05:00:31",
      "imdb_id": 119174,
      "tmdb_id": 2649.0
    },
    {
      "title": "Dark Knight Rises, The (2012)",
      "tag": "Morgan Freeman",
      "ratings": 4.5,
      "timestamp": "02:33:28",
      "imdb_id": 1345836,
      "tmdb_id": 49026.0
    },
    {
      "title": "Guardians of the Galaxy 2 (2017)",
      "tag": "fun",
      "ratings": 3.5,
      "timestamp": "18:35:24",
      "imdb_id": 3896198,
      "tmdb_id": 283995.0
    },
    {
      "title": "Kramer vs. Kramer (1979)",
      "tag": "divorce",
      "ratings": 4.5,
      "timestamp": "15:02:40",
      "imdb_id": 79417,
      "tmdb_id": 12102.0
    },
    {
      "title": "Donnie Darko (2001)",
      "tag": "weird",
      "ratings": 3.5,
      "timestamp": "17:31:08",
      "imdb_id": 246578,
      "tmdb_id": 141.0
    },
    {
      "title": "Waterboy, The (1998)",
      "tag": "football",
      "ratings": 2.0,
      "timestamp": "18:15:15",
      "imdb_id": 120484,
      "tmdb_id": 10663.0
    },
    {
      "title": "Fantastic Four: Rise of the Silver Surfer (2007)",
      "tag": "Chris Evans",
      "ratings": 3.0,
      "timestamp": "21:12:19",
      "imdb_id": 486576,
      "tmdb_id": 1979.0
    },
    {
      "title": "Upside Down: The Creation Records Story (2010)",
      "tag": "music",
      "ratings": 3.0,
      "timestamp": "12:08:02",
      "imdb_id": 1764726,
      "tmdb_id": 64780.0
    },
    {
      "title": "K-PAX (2001)",
      "tag": "aliens",
      "ratings": 2.5,
      "timestamp": "15:43:33",
      "imdb_id": 272152,
      "tmdb_id": 167.0
    },
    {
      "title": "L\u00e9on: The Professional (a.k.a. The Professional) (L\u00e9on) (1994)",
      "tag": "organized crime",
      "ratings": 5.0,
      "timestamp": "05:47:15",
      "imdb_id": 110413,
      "tmdb_id": 101.0
    },
    {
      "title": "Prestige, The (2006)",
      "tag": "atmospheric",
      "ratings": 3.5,
      "timestamp": "18:41:02",
      "imdb_id": 482571,
      "tmdb_id": 1124.0
    },
    {
      "title": "Pulp Fiction (1994)",
      "tag": "foul language",
      "ratings": 5.0,
      "timestamp": "06:01:07",
      "imdb_id": 110912,
      "tmdb_id": 680.0
    },
    {
      "title": "Suicide Squad (2016)",
      "tag": "Batman",
      "ratings": 4.0,
      "timestamp": "21:17:46",
      "imdb_id": 1386697,
      "tmdb_id": 297761.0
    },
    {
      "title": "Wizard of Oz, The (1939)",
      "tag": "Toto",
      "ratings": 4.5,
      "timestamp": "20:36:32",
      "imdb_id": 32138,
      "tmdb_id": 630.0
    },
    {
      "title": "Adventures of Robin Hood, The (1938)",
      "tag": "swashbuckler",
      "ratings": 3.5,
      "timestamp": "01:55:38",
      "imdb_id": 29843,
      "tmdb_id": 10907.0
    },
    {
      "title": "In Cold Blood (1967)",
      "tag": "crime",
      "ratings": 3.5,
      "timestamp": "15:07:32",
      "imdb_id": 61809,
      "tmdb_id": 18900.0
    },
    {
      "title": "Big Lebowski, The (1998)",
      "tag": "drugs",
      "ratings": 5.0,
      "timestamp": "05:50:50",
      "imdb_id": 118715,
      "tmdb_id": 115.0
    },
    {
      "title": "Crumb (1994)",
      "tag": "In Netflix queue",
      "ratings": 3.5,
      "timestamp": "20:11:42",
      "imdb_id": 109508,
      "tmdb_id": 26564.0
    },
    {
      "title": "(500) Days of Summer (2009)",
      "tag": "humorous",
      "ratings": 5.0,
      "timestamp": "07:21:50",
      "imdb_id": 1022603,
      "tmdb_id": 19913.0
    },
    {
      "title": "Princess Bride, The (1987)",
      "tag": "Inigo Montoya",
      "ratings": 4.5,
      "timestamp": "15:33:36",
      "imdb_id": 93779,
      "tmdb_id": 2493.0
    },
    {
      "title": "Wedding Crashers (2005)",
      "tag": "stiller",
      "ratings": 4.0,
      "timestamp": "09:53:25",
      "imdb_id": 396269,
      "tmdb_id": 9522.0
    },
    {
      "title": "Death Becomes Her (1992)",
      "tag": "plastic surgery",
      "ratings": 2.5,
      "timestamp": "15:15:02",
      "imdb_id": 104070,
      "tmdb_id": 9374.0
    },
    {
      "title": "Hands Over the City (Le mani sulla citt\u00e0) (1963)",
      "tag": "political right versus left",
      "ratings": 4.5,
      "timestamp": "10:32:22",
      "imdb_id": 57286,
      "tmdb_id": 58383.0
    },
    {
      "title": "Sausage Party (2016)",
      "tag": "Crude humor",
      "ratings": 5.0,
      "timestamp": "19:48:53",
      "imdb_id": 1700841,
      "tmdb_id": 223702.0
    },
    {
      "title": "40-Year-Old Virgin, The (2005)",
      "tag": "hilarious",
      "ratings": 5.0,
      "timestamp": "16:19:53",
      "imdb_id": 405422,
      "tmdb_id": 6957.0
    },
    {
      "title": "10 Cloverfield Lane (2016)",
      "tag": "creepy",
      "ratings": 3.0,
      "timestamp": "18:57:18",
      "imdb_id": 1179933,
      "tmdb_id": 333371.0
    },
    {
      "title": "Titus (1999)",
      "tag": "Shakespeare",
      "ratings": 4.5,
      "timestamp": "13:13:30",
      "imdb_id": 120866,
      "tmdb_id": 12524.0
    },
    {
      "title": "Splendor in the Grass (1961)",
      "tag": "adolescence",
      "ratings": 4.0,
      "timestamp": "20:22:16",
      "imdb_id": 55471,
      "tmdb_id": 28569.0
    },
    {
      "title": "Braveheart (1995)",
      "tag": "sword fight",
      "ratings": 4.5,
      "timestamp": "16:25:03",
      "imdb_id": 112573,
      "tmdb_id": 197.0
    },
    {
      "title": "X2: X-Men United (2003)",
      "tag": "Jean Grey",
      "ratings": 5.0,
      "timestamp": "20:48:19",
      "imdb_id": 290334,
      "tmdb_id": 36658.0
    },
    {
      "title": "Zero Dark Thirty (2012)",
      "tag": "terrorism",
      "ratings": 5.0,
      "timestamp": "22:14:30",
      "imdb_id": 1790885,
      "tmdb_id": 97630.0
    },
    {
      "title": "Sixth Sense, The (1999)",
      "tag": "imdb top 250",
      "ratings": 5.0,
      "timestamp": "21:55:19",
      "imdb_id": 167404,
      "tmdb_id": 745.0
    },
    {
      "title": "Wild Tales (2014)",
      "tag": "short stories",
      "ratings": 4.0,
      "timestamp": "22:54:01",
      "imdb_id": 3011894,
      "tmdb_id": 265195.0
    },
    {
      "title": "Pulp Fiction (1994)",
      "tag": "genius",
      "ratings": 5.0,
      "timestamp": "06:01:07",
      "imdb_id": 110912,
      "tmdb_id": 680.0
    },
    {
      "title": "Fantasia (1940)",
      "tag": "Disney",
      "ratings": 3.0,
      "timestamp": "17:21:59",
      "imdb_id": 32455,
      "tmdb_id": 756.0
    },
    {
      "title": "In the Name of the Father (1993)",
      "tag": "Ireland",
      "ratings": 4.0,
      "timestamp": "16:10:43",
      "imdb_id": 107207,
      "tmdb_id": 7984.0
    },
    {
      "title": "Misery (1990)",
      "tag": "horror",
      "ratings": 3.5,
      "timestamp": "05:17:50",
      "imdb_id": 100157,
      "tmdb_id": 1700.0
    },
    {
      "title": "My Neighbor Totoro (Tonari no Totoro) (1988)",
      "tag": "anime",
      "ratings": 4.0,
      "timestamp": "14:06:29",
      "imdb_id": 96283,
      "tmdb_id": 8392.0
    },
    {
      "title": "Lady in the Water (2006)",
      "tag": "disappointing",
      "ratings": 3.0,
      "timestamp": "04:26:08",
      "imdb_id": 452637,
      "tmdb_id": 9697.0
    },
    {
      "title": "Gravity (2013)",
      "tag": "Simple",
      "ratings": 3.0,
      "timestamp": "02:39:20",
      "imdb_id": 1454468,
      "tmdb_id": 49047.0
    },
    {
      "title": "Who Killed Chea Vichea? (2010)",
      "tag": "procedural",
      "ratings": 5.0,
      "timestamp": "18:04:22",
      "imdb_id": 1276121,
      "tmdb_id": 148184.0
    },
    {
      "title": "Babadook, The (2014)",
      "tag": "Metaphorical",
      "ratings": 4.5,
      "timestamp": "04:26:49",
      "imdb_id": 2321549,
      "tmdb_id": 242224.0
    },
    {
      "title": "Reservoir Dogs (1992)",
      "tag": "religion",
      "ratings": 4.0,
      "timestamp": "18:25:49",
      "imdb_id": 105236,
      "tmdb_id": 500.0
    },
    {
      "title": "Neon Genesis Evangelion: The End of Evangelion (Shin seiki Evangelion Gekij\u00f4-ban: Air/Magokoro wo, kimi ni) (1997)",
      "tag": "psychology",
      "ratings": 4.5,
      "timestamp": "10:37:19",
      "imdb_id": 169858,
      "tmdb_id": 18491.0
    },
    {
      "title": "Twelve Monkeys (a.k.a. 12 Monkeys) (1995)",
      "tag": "mindfuck",
      "ratings": 4.5,
      "timestamp": "18:20:54",
      "imdb_id": 114746,
      "tmdb_id": 63.0
    },
    {
      "title": "Kind Hearts and Coronets (1949)",
      "tag": "family",
      "ratings": 4.0,
      "timestamp": "21:21:56",
      "imdb_id": 41546,
      "tmdb_id": 11898.0
    },
    {
      "title": "Taken 2 (2012)",
      "tag": "Istanbul",
      "ratings": 3.5,
      "timestamp": "20:00:21",
      "imdb_id": 1397280,
      "tmdb_id": 82675.0
    },
    {
      "title": "Neon Genesis Evangelion: Death & Rebirth (Shin seiki Evangelion Gekij\u00f4-ban: Shito shinsei) (1997)",
      "tag": "Recap",
      "ratings": 3.5,
      "timestamp": "08:04:13",
      "imdb_id": 169880,
      "tmdb_id": 21832.0
    },
    {
      "title": "Fight Club (1999)",
      "tag": "action",
      "ratings": 5.0,
      "timestamp": "06:01:22",
      "imdb_id": 137523,
      "tmdb_id": 550.0
    },
    {
      "title": "Illusionist, The (2006)",
      "tag": "Paul Giamatti",
      "ratings": 4.0,
      "timestamp": "18:52:41",
      "imdb_id": 443543,
      "tmdb_id": 1491.0
    },
    {
      "title": "Pulp Fiction (1994)",
      "tag": "non-linear",
      "ratings": 5.0,
      "timestamp": "06:01:07",
      "imdb_id": 110912,
      "tmdb_id": 680.0
    },
    {
      "title": "eXistenZ (1999)",
      "tag": "virtual reality",
      "ratings": 4.0,
      "timestamp": "12:54:44",
      "imdb_id": 120907,
      "tmdb_id": 1946.0
    },
    {
      "title": "Aristocats, The (1970)",
      "tag": "Disney",
      "ratings": 3.5,
      "timestamp": "20:42:55",
      "imdb_id": 65421,
      "tmdb_id": 10112.0
    },
    {
      "title": "All the President's Men (1976)",
      "tag": "Deep Throat",
      "ratings": 4.5,
      "timestamp": "16:52:34",
      "imdb_id": 74119,
      "tmdb_id": 891.0
    },
    {
      "title": "Spanglish (2004)",
      "tag": "family",
      "ratings": 4.0,
      "timestamp": "21:14:54",
      "imdb_id": 371246,
      "tmdb_id": 2539.0
    },
    {
      "title": "Blade Runner 2049 (2017)",
      "tag": "moody",
      "ratings": 5.0,
      "timestamp": "17:27:43",
      "imdb_id": 1856101,
      "tmdb_id": 335984.0
    },
    {
      "title": "Erin Brockovich (2000)",
      "tag": "true story",
      "ratings": 4.0,
      "timestamp": "20:04:34",
      "imdb_id": 195685,
      "tmdb_id": 462.0
    },
    {
      "title": "Sting, The (1973)",
      "tag": "The Entertainer",
      "ratings": 4.0,
      "timestamp": "18:03:06",
      "imdb_id": 70735,
      "tmdb_id": 9277.0
    },
    {
      "title": "Fast Times at Ridgemont High (1982)",
      "tag": "high school",
      "ratings": 2.0,
      "timestamp": "02:38:08",
      "imdb_id": 83929,
      "tmdb_id": 13342.0
    },
    {
      "title": "Star Trek (2009)",
      "tag": "Simon Pegg",
      "ratings": 4.5,
      "timestamp": "05:19:17",
      "imdb_id": 796366,
      "tmdb_id": 13475.0
    },
    {
      "title": "The Machinist (2004)",
      "tag": "Christian Bale",
      "ratings": 4.5,
      "timestamp": "04:21:11",
      "imdb_id": 361862,
      "tmdb_id": 4553.0
    },
    {
      "title": "Saw (2004)",
      "tag": "great ending",
      "ratings": 5.0,
      "timestamp": "19:50:21",
      "imdb_id": 387564,
      "tmdb_id": 176.0
    },
    {
      "title": "Silence of the Lambs, The (1991)",
      "tag": "drama",
      "ratings": 5.0,
      "timestamp": "18:20:21",
      "imdb_id": 102926,
      "tmdb_id": 274.0
    },
    {
      "title": "Gladiator (2000)",
      "tag": "Romans",
      "ratings": 3.5,
      "timestamp": "23:43:55",
      "imdb_id": 172495,
      "tmdb_id": 98.0
    },
    {
      "title": "To Kill a Mockingbird (1962)",
      "tag": "Harper Lee",
      "ratings": 4.0,
      "timestamp": "23:30:55",
      "imdb_id": 56592,
      "tmdb_id": 595.0
    },
    {
      "title": "Eternal Sunshine of the Spotless Mind (2004)",
      "tag": "bittersweet",
      "ratings": 5.0,
      "timestamp": "17:30:55",
      "imdb_id": 338013,
      "tmdb_id": 38.0
    },
    {
      "title": "South Park: Bigger, Longer and Uncut (1999)",
      "tag": "free speech",
      "ratings": 5.0,
      "timestamp": "04:46:22",
      "imdb_id": 158983,
      "tmdb_id": 9473.0
    },
    {
      "title": "Grifters, The (1990)",
      "tag": "crime",
      "ratings": 3.5,
      "timestamp": "15:34:00",
      "imdb_id": 99703,
      "tmdb_id": 18129.0
    },
    {
      "title": "L\u00e9on: The Professional (a.k.a. The Professional) (L\u00e9on) (1994)",
      "tag": "Lolita theme",
      "ratings": 5.0,
      "timestamp": "05:47:15",
      "imdb_id": 110413,
      "tmdb_id": 101.0
    },
    {
      "title": "Inside Llewyn Davis (2013)",
      "tag": "atmospheric",
      "ratings": 4.0,
      "timestamp": "17:58:31",
      "imdb_id": 2042568,
      "tmdb_id": 86829.0
    },
    {
      "title": "Blade Runner (1982)",
      "tag": "robots",
      "ratings": 3.0,
      "timestamp": "22:55:48",
      "imdb_id": 83658,
      "tmdb_id": 78.0
    },
    {
      "title": "Hulk (2003)",
      "tag": "Eric Bana",
      "ratings": 3.5,
      "timestamp": "20:58:52",
      "imdb_id": 286716,
      "tmdb_id": 1927.0
    },
    {
      "title": "Eternal Sunshine of the Spotless Mind (2004)",
      "tag": "colourful",
      "ratings": 5.0,
      "timestamp": "17:30:55",
      "imdb_id": 338013,
      "tmdb_id": 38.0
    },
    {
      "title": "Angel's Egg (Tenshi no tamago) (1985)",
      "tag": "atmospheric",
      "ratings": 3.5,
      "timestamp": "18:43:34",
      "imdb_id": 208502,
      "tmdb_id": 15916.0
    },
    {
      "title": "Fight Club (1999)",
      "tag": "thought-provoking",
      "ratings": 5.0,
      "timestamp": "06:01:22",
      "imdb_id": 137523,
      "tmdb_id": 550.0
    },
    {
      "title": "Donnie Darko (2001)",
      "tag": "social commentary",
      "ratings": 5.0,
      "timestamp": "18:36:49",
      "imdb_id": 246578,
      "tmdb_id": 141.0
    },
    {
      "title": "Black Swan (2010)",
      "tag": "creepy",
      "ratings": 3.5,
      "timestamp": "05:07:28",
      "imdb_id": 947798,
      "tmdb_id": 44214.0
    },
    {
      "title": "Star Wars: Episode IV - A New Hope (1977)",
      "tag": "EPIC",
      "ratings": 5.0,
      "timestamp": "00:22:57",
      "imdb_id": 76759,
      "tmdb_id": 11.0
    },
    {
      "title": "Lord of the Rings, The (1978)",
      "tag": "Tolkein",
      "ratings": 2.0,
      "timestamp": "19:27:26",
      "imdb_id": 77869,
      "tmdb_id": 123.0
    },
    {
      "title": "Neon Genesis Evangelion: The End of Evangelion (Shin seiki Evangelion Gekij\u00f4-ban: Air/Magokoro wo, kimi ni) (1997)",
      "tag": "mecha",
      "ratings": 4.5,
      "timestamp": "10:37:19",
      "imdb_id": 169858,
      "tmdb_id": 18491.0
    },
    {
      "title": "Paterson",
      "tag": "quirky",
      "ratings": 4.5,
      "timestamp": "17:50:48",
      "imdb_id": 5247022,
      "tmdb_id": 370755.0
    },
    {
      "title": "Return of the Secaucus 7 (1980)",
      "tag": "In Netflix queue",
      "ratings": 3.5,
      "timestamp": "01:07:51",
      "imdb_id": 81420,
      "tmdb_id": 42750.0
    },
    {
      "title": "Gentlemen Prefer Blondes (1953)",
      "tag": "In Netflix queue",
      "ratings": 3.0,
      "timestamp": "01:07:36",
      "imdb_id": 45810,
      "tmdb_id": 759.0
    },
    {
      "title": "Negotiator, The (1998)",
      "tag": "police",
      "ratings": 4.0,
      "timestamp": "20:37:18",
      "imdb_id": 120768,
      "tmdb_id": 9631.0
    },
    {
      "title": "X2: X-Men United (2003)",
      "tag": "Wolverine",
      "ratings": 5.0,
      "timestamp": "20:48:19",
      "imdb_id": 290334,
      "tmdb_id": 36658.0
    },
    {
      "title": "Coal Miner's Daughter (1980)",
      "tag": "Loretta Lynn",
      "ratings": 4.0,
      "timestamp": "15:35:23",
      "imdb_id": 80549,
      "tmdb_id": 16769.0
    },
    {
      "title": "A.I. Artificial Intelligence (2001)",
      "tag": "robots",
      "ratings": 4.5,
      "timestamp": "17:47:37",
      "imdb_id": 212720,
      "tmdb_id": 644.0
    },
    {
      "title": "Caddyshack (1980)",
      "tag": "golf",
      "ratings": 2.0,
      "timestamp": "19:24:56",
      "imdb_id": 80487,
      "tmdb_id": 11977.0
    },
    {
      "title": "Star Trek: First Contact (1996)",
      "tag": "Borg",
      "ratings": 5.0,
      "timestamp": "20:56:26",
      "imdb_id": 117731,
      "tmdb_id": 199.0
    },
    {
      "title": "Arrival (2016)",
      "tag": "Cerebral",
      "ratings": 4.0,
      "timestamp": "18:13:25",
      "imdb_id": 2543164,
      "tmdb_id": 329865.0
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone (a.k.a. Harry Potter and the Philosopher's Stone) (2001)",
      "tag": "Magic",
      "ratings": 3.5,
      "timestamp": "10:41:59",
      "imdb_id": 241527,
      "tmdb_id": 671.0
    },
    {
      "title": "Come and See (Idi i smotri) (1985)",
      "tag": "harsh",
      "ratings": 5.0,
      "timestamp": "17:31:56",
      "imdb_id": 91251,
      "tmdb_id": 25237.0
    },
    {
      "title": "Pulp Fiction (1994)",
      "tag": "bad ass",
      "ratings": 5.0,
      "timestamp": "06:01:07",
      "imdb_id": 110912,
      "tmdb_id": 680.0
    },
    {
      "title": "Paprika (Papurika) (2006)",
      "tag": "dreamlike",
      "ratings": 4.5,
      "timestamp": "05:00:41",
      "imdb_id": 851578,
      "tmdb_id": 4977.0
    },
    {
      "title": "Big Lebowski, The (1998)",
      "tag": "satirical",
      "ratings": 5.0,
      "timestamp": "05:50:50",
      "imdb_id": 118715,
      "tmdb_id": 115.0
    },
    {
      "title": "Layer Cake (2004)",
      "tag": "British gangster",
      "ratings": 4.5,
      "timestamp": "20:28:04",
      "imdb_id": 375912,
      "tmdb_id": 4836.0
    },
    {
      "title": "Dark Water (Honogurai mizu no soko kara) (2002)",
      "tag": "remade",
      "ratings": 4.0,
      "timestamp": "20:36:20",
      "imdb_id": 308379,
      "tmdb_id": 12205.0
    },
    {
      "title": "Good Copy Bad Copy (2007)",
      "tag": "music industry",
      "ratings": 3.5,
      "timestamp": "09:56:11",
      "imdb_id": 1782451,
      "tmdb_id": 22285.0
    },
    {
      "title": "Pan's Labyrinth (Laberinto del fauno, El) (2006)",
      "tag": "atmospheric",
      "ratings": 3.0,
      "timestamp": "18:46:59",
      "imdb_id": 457430,
      "tmdb_id": 1417.0
    },
    {
      "title": "Terminator Salvation (2009)",
      "tag": "franchise",
      "ratings": 4.0,
      "timestamp": "05:26:14",
      "imdb_id": 438488,
      "tmdb_id": 534.0
    },
    {
      "title": "Suicide Squad (2016)",
      "tag": "comic book",
      "ratings": 4.0,
      "timestamp": "21:17:46",
      "imdb_id": 1386697,
      "tmdb_id": 297761.0
    },
    {
      "title": "Friends with Benefits (2011)",
      "tag": "funny",
      "ratings": 3.5,
      "timestamp": "21:14:18",
      "imdb_id": 1632708,
      "tmdb_id": 50544.0
    },
    {
      "title": "Omen, The (1976)",
      "tag": "demons",
      "ratings": 4.0,
      "timestamp": "20:42:12",
      "imdb_id": 75005,
      "tmdb_id": 794.0
    },
    {
      "title": "Bowling for Columbine (2002)",
      "tag": "violence in america",
      "ratings": 4.0,
      "timestamp": "15:16:13",
      "imdb_id": 310793,
      "tmdb_id": 1430.0
    },
    {
      "title": "Traffic (2000)",
      "tag": "drugs",
      "ratings": 4.5,
      "timestamp": "15:39:45",
      "imdb_id": 181865,
      "tmdb_id": 1900.0
    },
    {
      "title": "Pulp Fiction (1994)",
      "tag": "nonlinear timeline",
      "ratings": 5.0,
      "timestamp": "06:01:07",
      "imdb_id": 110912,
      "tmdb_id": 680.0
    },
    {
      "title": "28 Days Later (2002)",
      "tag": "zombies",
      "ratings": 5.0,
      "timestamp": "17:23:43",
      "imdb_id": 289043,
      "tmdb_id": 170.0
    },
    {
      "title": "Pulp Fiction (1994)",
      "tag": "monologue",
      "ratings": 5.0,
      "timestamp": "06:01:07",
      "imdb_id": 110912,
      "tmdb_id": 680.0
    },
    {
      "title": "Clueless (1995)",
      "tag": "quotable",
      "ratings": 4.5,
      "timestamp": "22:28:48",
      "imdb_id": 112697,
      "tmdb_id": 9603.0
    },
    {
      "title": "Life Aquatic with Steve Zissou, The (2004)",
      "tag": "whimsical",
      "ratings": 4.0,
      "timestamp": "18:00:26",
      "imdb_id": 362270,
      "tmdb_id": 421.0
    },
    {
      "title": "Duma (2005)",
      "tag": "In Netflix queue",
      "ratings": 3.5,
      "timestamp": "20:11:58",
      "imdb_id": 361715,
      "tmdb_id": 15907.0
    },
    {
      "title": "Upside Down: The Creation Records Story (2010)",
      "tag": "indie record label",
      "ratings": 3.0,
      "timestamp": "12:08:02",
      "imdb_id": 1764726,
      "tmdb_id": 64780.0
    },
    {
      "title": "Straight Story, The (1999)",
      "tag": "lawn mower",
      "ratings": 4.0,
      "timestamp": "18:46:52",
      "imdb_id": 166896,
      "tmdb_id": 404.0
    },
    {
      "title": "Wings of the Dove, The (1997)",
      "tag": "Henry James",
      "ratings": 4.5,
      "timestamp": "17:53:40",
      "imdb_id": 120520,
      "tmdb_id": 45609.0
    },
    {
      "title": "Basketball Diaries, The (1995)",
      "tag": "heroin",
      "ratings": 3.5,
      "timestamp": "20:40:10",
      "imdb_id": 112461,
      "tmdb_id": 10474.0
    },
    {
      "title": "Black Beauty (1994)",
      "tag": "horses",
      "ratings": 3.5,
      "timestamp": "13:52:05",
      "imdb_id": 109279,
      "tmdb_id": 14522.0
    },
    {
      "title": "Silence of the Lambs, The (1991)",
      "tag": "suspense",
      "ratings": 5.0,
      "timestamp": "18:20:21",
      "imdb_id": 102926,
      "tmdb_id": 274.0
    },
    {
      "title": "Fight Club (1999)",
      "tag": "crime",
      "ratings": 5.0,
      "timestamp": "06:01:22",
      "imdb_id": 137523,
      "tmdb_id": 550.0
    },
    {
      "title": "Monty Python's Life of Brian (1979)",
      "tag": "Bible",
      "ratings": 3.0,
      "timestamp": "02:39:05",
      "imdb_id": 79470,
      "tmdb_id": 583.0
    },
    {
      "title": "Bottle Rocket (1996)",
      "tag": "off-beat comedy",
      "ratings": 3.0,
      "timestamp": "18:53:30",
      "imdb_id": 115734,
      "tmdb_id": 13685.0
    },
      // Other movie objects here
  ];

  function filterAndSortMovies(tag, rating, year) {
    const filteredMovies = movies.filter(movie => {
        const tagMatch = tag === 'any' || movie.tag.toLowerCase().includes(tag.toLowerCase());
        const ratingMatch = isNaN(rating) || movie.ratings === rating; // Changed condition
        const yearMatch = isNaN(year) || getYearFromTitle(movie.title) === year;
        return tagMatch && ratingMatch && yearMatch;
    });

    // Sort filtered movies based on tag, rating, and year
    filteredMovies.sort((a, b) => {
        if (a.tag !== b.tag) {
            return a.tag.localeCompare(b.tag); // Sort by tag
        } else if (a.ratings !== b.ratings) {
            return b.ratings - a.ratings; // Sort by rating
        } else {
            return getYearFromTitle(b.title) - getYearFromTitle(a.title); // Sort by year
        }
    });

    return filteredMovies;
  }

  // Function to display movie cards
  function displayMovies(filteredMovies) {
      movieDetailsDiv.innerHTML = ''; // Clear previous movie cards

      if (filteredMovies.length === 0) {
          alert("No movies match the selected criteria. Please try again.");
          return;
      }

      filteredMovies.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');

          // Display movie title
          const titleElement = document.createElement('h2');
          titleElement.textContent = movie.title;
          movieCard.appendChild(titleElement);

          // Display movie details (initially hidden)
          const detailsElement = document.createElement('div');
          detailsElement.classList.add('movie-details');
          detailsElement.innerHTML = `
              <p>Tag: ${movie.tag}</p>
              <p>Ratings: ${getStarRating(movie.ratings)}</p>
              <p>Timestamp: ${movie.timestamp}</p>
              <p>IMDb ID: ${movie.imdb_id}</p>
              <p>TMDb ID: ${movie.tmdb_id}</p>
          `;
          movieCard.appendChild(detailsElement);

          // Toggle visibility of details when the card is clicked
          movieCard.addEventListener('click', function() {
              detailsElement.style.display = detailsElement.style.display === 'none' ? 'block' : 'none';
          });

          movieDetailsDiv.appendChild(movieCard);
      });
  }

  // Function to convert ratings to star format
  function getStarRating(ratings) {
      const rating = parseFloat(ratings);
      const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
      const fullStars = Math.floor(roundedRating);
      const halfStars = Math.ceil(roundedRating - fullStars);
      const emptyStars = 5 - fullStars - halfStars;

      let starsHTML = '';
      for (let i = 0; i < fullStars; i++) {
          starsHTML += '<span class="star">&#9733;</span>'; // Full star
      }
      for (let i = 0; i < halfStars; i++) {
          starsHTML += '<span class="star">&#9734;</span>'; // Half star
      }
      for (let i = 0; i < emptyStars; i++) {
          starsHTML += '<span class="star">&#9734;</span>'; // Empty star
      }
      return starsHTML;
  }

  // Function to extract year from movie title
  function getYearFromTitle(title) {
    const regex = /\((\d{4})\)/;
    const match = title.match(regex);
    if (match) {
      return parseInt(match[1]);
    }
    return null;
  }

  // Function to handle filtering and sorting when user input changes
  function handleInputChange() {
    const tag = selectTag.value.trim();
    const rating = parseFloat(selectRating.value.trim());
    const year = parseInt(enterYear.value.trim());
    const filteredAndSortedMovies = filterAndSortMovies(tag, rating, year);
    displayMovies(filteredAndSortedMovies);
  }

  // Add event listeners to input elements
  selectTag.addEventListener('change', handleInputChange);
  selectRating.addEventListener('change', handleInputChange);
  enterYear.addEventListener('input', handleInputChange);

  // Initial display of all movies
  displayMovies(movies);
});
