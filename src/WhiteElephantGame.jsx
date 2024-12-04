import React, { useState } from 'react';
import { Gift, Snowflake, TreePine, Heart, Sparkles, CandyCane, Star, User, Lock } from 'lucide-react';
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
    "Essential Oil Diffuser", "Glass Food Containers", "Travel Coffee Tumbler", "Candle Warmer", "Fondue Pot", "Flower Pot", 
    "Welcome Door Sign", "Candle", "Charcuterie Board", "Catch Phrase Game", "Pickleball Set", "Cocktail Shaker Set", "Coffee Java Sok", "Movie Night Popcorn Kit", "Headache Relief Hat", "3-in-1 Can Koozie",
    "Massage Gun", "Dumpster Fire Travel Mug", "Holiday Home Puzzle", "Popcorn Maker", "Coffee Mug", "Code Name Game", "Tapple Game", "Carhartt Hat", "Blanket", "Eagles Desk Pad", "Rechargable Hand Warmers",
    "Himalayan Salt Lamp", "Holiday Waffle Maker", "Snoop Dogg Cook Book", "Mug Warmer", "Veggie Chopper", "Packing Cubes", "Stanley Wine Tumbler", "Charging Phone Stand", "Mini Crock Pot", 
    "Portable Charger", "What Do You Meme? Game", "Light Up Turkey Hat", "Grilling Tool Set"
  ];

  const giftLinks = [
    "https://www.amazon.com/dp/B0CX1FRR27/?coliid=INYMACIY4YFGS&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B08PP8KDR3/?coliid=I2SE4Y9P1S54SQ&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/dp/B07LBQR3QY/?coliid=IV6VSTBXNHCKS&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/ROSOS-Storage-Containers-Airtight-Dishwasher/dp/B093B1S3R2/ref=sr_1_46?crid=X3P8Y6TFKCJV&dib=eyJ2IjoiMSJ9.LYYitFJ6AZ3UOsgHZq2br1Z-l960DUdjRy_vXJWfE_hVNCK9dmQ7sACzFbejDf8LHqth-zgllJc19yMVWFcU1qOnJBEktw1UTdtxcXecBZV-viF7juVhrtlhTo0zHk3lx8Di7HxXubg6da9PLOQ0m7NX7DxOz0rSES4RMTy5cd4emO7F22Xoc3k-BhVIaOowG1VQZf2VazMX6a7CfRMqwJn95khQhaJj205rndKoLD_06gzfQvYdyovauuFDumx3PRBEP2f1PdSKrBOewt3F9-kM5vExG3FszCoF19ikZVg.H62f-3y64k2_-gktJIWEhOxXv3Csq_p2zUEzi-yawr4&dib_tag=se&keywords=glass%2Bcontainers%2Bwith%2Blids&qid=1733188557&refinements=p_36%3A-2300&rnid=386465011&sprefix=glass%2Bcont%2Caps%2C108&sr=8-46&th=1",
    "https://www.amazon.com/dp/B0C5S35LQP/?coliid=I1OC2U6FM2OO62&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/GODONLIF-Candle-Adjustable-Dimmable-Candles/dp/B0CTJGJL2T/ref=sr_1_6?crid=16FIYQU2R79MW&dib=eyJ2IjoiMSJ9.ksfZhjIelLi6LnKe3ibEsYip8Y-IDRigNhDFTByc3M21ABFz5HU0u5pyrB46gBYTFJd2lH6G0OFF6Lveqn6dAxQChVtajNBKN3mUu84uZQz6tQEBw-YYhXLmJEB_F8oMdiO9U-pW6RkMPwq3ARla_3sFp3mW0FE1V7CzMbQ3FvRLvjd84i8PHTPbghlPiVQhOv3bzT8_qj4UiialXMmMvrHgUsGpuxo6EeEQb8lLSa-dCx9udO4mq1TkrBfFJk9Hd_0AHYkHa8v7YgVBzqQGVeNZyTLlXXx3FDzOJqO7AeY.Hrdl2Sc1Wwii0N6G7o9wW7bWW1xe5FikJwROSf38HxY&dib_tag=se&keywords=candle+warmer+under+20&qid=1733187026&sprefix=candle+warmer+under+20%2Caps%2C91&sr=8-6",
    "https://www.amazon.com/Nostalgia-10-Ounce-Electric-Chocolate-3-Section/dp/B0CJKTBMZM/ref=sr_1_7?crid=5VQT067XE72K&dib=eyJ2IjoiMSJ9.jtJF80M-4a2irdhwAs8zYlunHXDWuRi_U0DhsfWApRru2w8i6WdzBXc-WX-GU2Hm-oHuTJFA5Icucr-6q7-HeRPtMg7meUD1lRJWH9KHjHpPugP2JMikiewa32-DVMTGkw7lM6NQwweDzCI-Cxi80bZOF-YD_NjXpByDYaMPHyE3oYHglYdyVl6mEZD8evMPzOLykQoj_9sL9UhTTH6s9KH1IPOAummDbiu4bl8A7Pd-PeUvz-wB3eTEnvPPeScsI4nPfuqBtm8nSPac1oNfk2rFBvXSlHd1x8evG7ffZnE.7lar8E-tGlXvrMVcJK9yOaRQvDS-AtFGvHx5DUE_vog&dib_tag=se&keywords=fondue&qid=1733188245&refinements=p_36%3A-2500&rnid=386465011&sprefix=fondue%2Caps%2C106&sr=8-7&th=1",
    "https://www.amazon.com/NINIPAPA-Planter-Succulent-Birthday-Christmas%EF%BC%88Small%EF%BC%89/dp/B0CR358BQQ/ref=sxin_13_pa_sp_search_thematic_sspa?content-id=amzn1.sym.76d54fcc-2362-404d-ab9b-b0653e2b2239%3Aamzn1.sym.76d54fcc-2362-404d-ab9b-b0653e2b2239&crid=SUI0CMAKYVDF&cv_ct_cx=planter&dib=eyJ2IjoiMSJ9.1AggGkirrSAzqHXLy85VKALP3u-GilmiZ67oXdcV28ge19FMeH2c5_v5eK2QRJJd5a8iRQnmxjDRan2YqVL-NQ.bIEq2dtHqYXSn0RZgbNZRUn5IpaVAoBSixET-zsEQ64&dib_tag=se&keywords=planter&pd_rd_i=B0CR358BQQ&pd_rd_r=5b5396df-9d68-4c94-850f-430b650dd6ba&pd_rd_w=kfMeq&pd_rd_wg=KalGK&pf_rd_p=76d54fcc-2362-404d-ab9b-b0653e2b2239&pf_rd_r=VPY80XP6G83WKNNBSNN2&qid=1733186938&sbo=9ZOMT9Jm0JH%2Ft%2BWi68iDSA%3D%3D&sprefix=plante%2Caps%2C143&sr=1-5-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
    "https://www.amazon.com/Interchangeable-Changeable-Halloween-Independence-Housewarming/dp/B094YMKXN5/ref=cm_gf_aczq_d_bt20_p0_e0_qd0_po4m0i2HXHorT0J9p8aw?sbo=9ZOMT9Jm0JH%2Ft%2BWi68iDSA%3D%3D&th=1",
    "https://www.amazon.com/Yankee-Candle-2-Wick-Tumbler-Balsam/dp/B002UE6YQ8/ref=sr_1_15_sspa?crid=16FIYQU2R79MW&dib=eyJ2IjoiMSJ9.ksfZhjIelLi6LnKe3ibEsYip8Y-IDRigNhDFTByc3M21ABFz5HU0u5pyrB46gBYTFJd2lH6G0OFF6Lveqn6dAxQChVtajNBKN3mUu84uZQz6tQEBw-YYhXLmJEB_F8oMdiO9U-pW6RkMPwq3ARla_3sFp3mW0FE1V7CzMbQ3FvRLvjd84i8PHTPbghlPiVQhOv3bzT8_qj4UiialXMmMvrHgUsGpuxo6EeEQb8lLSa-dCx9udO4mq1TkrBfFJk9Hd_0AHYkHa8v7YgVBzqQGVeNZyTLlXXx3FDzOJqO7AeY.Hrdl2Sc1Wwii0N6G7o9wW7bWW1xe5FikJwROSf38HxY&dib_tag=se&keywords=candle+warmer+under+20&qid=1733186972&sprefix=candle+warmer+under+20%2Caps%2C91&sr=8-15-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
    "https://www.amazon.com/dp/B08HFP35Q8/?coliid=I36OVDUCOYYXK2&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/Hasbro-Games-Ultimate-Catch-Phrase/dp/B083YKSF3B/ref=sr_1_3?crid=2EPQB3M869OLA&dib=eyJ2IjoiMSJ9.mN77dwx4R1p3FNHn-0IkB7iZtPdhuRvvo1FHo3KrS_5smgR4QjXsVPNaFViYEp9TuheA-ttb20glLFd77ybYu9TYRhCArh7LjBZyxUSe57v-gUmsDmc1ccQnDEbqxM0uWw3Znn70-hMn-kmxf6wlTpXWlhHB0EeKyO0isfhtMgoJfSuDfDdrTmOYakLG9QvH0Gs9rhOtbI8LkJOICKt8DWRS3qU3QOJPmP6neTJ6nX8DFbc2sEeEIOf82Fp0uvnxlcwOR4p61dE25Je5P01rq5pf9Fipg8gtY6AjgSIIcBA.265f5z8DILVXQTg6w2d2lC2s6IfgnGg6L4OLv9GFplU&dib_tag=se&keywords=catch%2Bphrase&qid=1733188082&sprefix=catch%2Bphras%2Caps%2C112&sr=8-3&th=1",
    "https://www.amazon.com/A11N-Pickleball-Paddles-Fiberglass-Beginners/dp/B0CYP3NYF1/ref=sr_1_3_sspa?crid=DQVC05AAUK3P&dib=eyJ2IjoiMSJ9.mNd_OmrtwM2T5vNZ4Bda592GZsZe9ujqQ99bSIAO-gg9fHVrzsDFjl03BEUNF_zhn3AuEVRKptza57c2cz-bPHkLtJ955IuPblq_SeOpgKhasTe6FBPVp3VBKQVMdR6aB6R7lmgrHN5Bw7AXSCGXtScvfrYEFzeseS2rsSZbLvHpg1Z2xgM_iYEWLZ-xwRbFf5r2OTsZSjCCx_fAJBfmCwRwoyYDFvE0dEAb2L0JBvwubLeJSLx4y4nWFGh7NGgPZgTiofzi3rpmSB4JMW9RwzWbhUMWbOG7Oxy--WNPijQ.7iieGnJSiKFdyMbrQtTvxV0uyugmcZ78RomnCCsSd4c&dib_tag=se&keywords=pickleball%2Bset&qid=1733186704&refinements=p_36%3A-2400&rnid=386589011&s=sporting-goods&sprefix=pickleball%2Bset%2Csporting%2C72&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    "https://www.amazon.com/dp/B0BD98H3RJ/?coliid=ISH8R3MEA0M2R&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B09MSWS59N/?coliid=I3QIHKX6LIIWD7&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B07JN5467R/?coliid=I35FE0IHTJJJX6&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/dp/B0CQXMWQH9/?coliid=IKJA0IMOQWA2U&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/dp/B0CH4312DP/?coliid=I31VIW8HVD1BKZ&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/dp/B0BFF9N6QQ/?coliid=I132DMRL26V2NR&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B0CCN3Q171/?coliid=I29J8WFBXE9I0Z&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/gp/aw/d/B0CRSPLG7B/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=d2021e18569c72f8b3e6149bbfae260c&hsa_cr_id=0&qid=1733187758&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_be_s_sparkle_lsi4d_asin_0_title&pd_rd_w=VuKbY&content-id=amzn1.sym.8591358d-1345-4efd-9d50-5bd4e69cd942%3Aamzn1.sym.8591358d-1345-4efd-9d50-5bd4e69cd942&pf_rd_p=8591358d-1345-4efd-9d50-5bd4e69cd942&pf_rd_r=AFTZCNJ235SSB9HSZA55&pd_rd_wg=VFLNC&pd_rd_r=6f83c8fd-d904-460c-a644-089e14080202",
    "https://www.amazon.com/dp/B07NWDSVPP/?coliid=I7T7V5HNUFVTZ&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/dp/B0CJH2VZLX/?coliid=I28BZ37YGQPVZX&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/Czech-Games-00031CGE-Codenames/dp/B014Q1XX9S/ref=sr_1_3?crid=JO1WRU5829BZ&dib=eyJ2IjoiMSJ9.l9sIKc2vKp1KArqzEaa3IAhBPtdfYyB7Y-d-Xioslfyf3pDQwIjJo1SDfVTPF4Dbu16OvtrlYK8HtjUBZeAvC-s3gaGaNZneT1ftrWpXEY_m3okVFcorG-0agJ8T9Qdog8G8m_Wi7iQr1s_9x-dvI_v5_3vhqHI4Lkffmi9InA7g_GAGVViA7s1yohJkhkWgfG4YUYLSvq3RfKbNNZs7OuNlrZq052RY-JWsAjgXE5uO0cTnSY5wNPvczTNmDkvWmGOt-cwSUK3wVC8wxOUXTafegCRiPu_dU9uGEiNj1r4.1jYQ5DDH2_RPk1W-XptInJ7G42mL827drPrl2NZmnSc&dib_tag=se&keywords=code+names+game&qid=1733188032&sprefix=code+names+game%2Caps%2C92&sr=8-3",
    "https://www.amazon.com/TAPPLE%C2%AE-Fast-Paced-Category-Against-Learning/dp/B09QRXD9H1/ref=sr_1_39?crid=10EVVI6H9N75U&dib=eyJ2IjoiMSJ9.7QXcPk-3kxxRlB5assVVyBpOtzS9mgmNG4Cqv0PrpJ5FeVqfGP5uPhSImQ77uviVg-NBcqh73p9_1A1TAyiA8lEKxqD6dyMGAnEvLO3od6hREjltfCMjPUCZNGOBQJz3RWS4TEjgPnTKD7DVBC05TYemFXJhHzy9y_hilb8OYqatPZNM6K_5SefgvEF21TDjl_ts1LrKRN_QfPIhcOEjZYIsQXsfmdFjASaqmqSK1nw_wIW6MwxWR_g9K_r12DllJOvMXtLNhFd2up38o9ubetNudtHCk7_3TrEqDZisrNY.VHiplU4KtZfNTEL5hkTC8mB3LtRB6ERNX0MlIyjxU5w&dib_tag=se&keywords=game+under+20&qid=1733288626&sprefix=game+under+20%2Caps%2C119&sr=8-39",
    "https://www.amazon.com/dp/B002G9UDXW/ref=twister_B0D3288JD2?_encoding=UTF8&psc=1",
    "https://www.amazon.com/dp/B07X3BX7WM/?coliid=IDEWO8DY2Q7BC&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/YouTheFan-Philadelphia-Eagles-Logo-Desk/dp/B0C6V259LG/ref=sr_1_56?crid=37TEZFEY327SQ&dib=eyJ2IjoiMSJ9.pHwFG9uutPLMJ4o2AxRvD-l13q34Fv3zDF70juGcBuNqjuRnDrpYkXjfXbQ61uoPoYMi6wWqssQkJ0MZrytVtCI_C_jj7MjE3C1xZp1d1NY.JKcpBOlLQBYs_F613TjR36Lu562VanjmtaXp7hdW4X0&dib_tag=se&keywords=philly%2Bgifts&qid=1733187590&refinements=p_36%3A-2100&rnid=2661611011&sprefix=philly%2Bgifts%2Caps%2C88&sr=8-56&th=1",
    "https://www.amazon.com/dp/B0CG65PYBV/?coliid=I1WBDN6BN63LPY&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B07CH3KR5P/?coliid=I2X9QEV2W5IYZS&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/DASH-Holiday-Multimaker-Mini-System/dp/B0DFK9Y8VK?ref_=ast_sto_dp&th=1",
    "https://www.amazon.com/dp/1452179611/?coliid=I31PT09IONXFWR&colid=350APNZ3CSNB4&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    "https://www.amazon.com/dp/B08FDFRKR3/?coliid=I1T7BM2DU86OFT&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B0BNJ7FCJM/?coliid=I2JHAA0715R3E&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/Bagail-Compression-Packing-Expandable-Organizers/dp/B081JSFHZK/ref=sr_1_5?crid=O2EZHQ3350JQ&dib=eyJ2IjoiMSJ9.aA8xe408WOk67A1Wlz2-bcJy8ycJtXU3Y_XZh9GcGb5v2-ygS7odnTtLXh1TTlYpj8v3OVH2SvgAPSagOYLzbZTu2JbKWEpYtewAVLMagoNGOgLmUZ87NU_QeKmJUYyqJyE9U1vizooevT4mppp9r-vC_xfB1GiCSbEIz_m9fVJ3Zuj96PrcpW6hnTtC9dqmhTUBdAk3tpzPH6rSo3lMG9s6QRZaKHe7ZLF3CLCjOvIOonCsMttIOJt-9p1hEWdbtDsgInIT3fFdfFIovO0q8lmcTWIAPdHqHsr4JyfO3TI.7uwnI7RtSqxjRPjihjrZdwYjQbYdDuUbjE8qkLLAO3k&dib_tag=se&keywords=packing%2Bcubes%2Bcompress&qid=1733184887&sprefix=packing%2Bcubes%2Bcompres%2Caps%2C82&sr=8-5&th=1",
    "https://www.amazon.com/dp/B0BX7HCXXC/?coliid=I1OW866GXIYE8M&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/dp/B0CM8R3WWY/?coliid=I3IEG6JIQ0AITS&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/Crock-Pot-SCR151-2-Quart-Manual-Cooker/dp/B002KRH9XW/ref=sr_1_6?crid=2QPN2YK0KR0OL&dib=eyJ2IjoiMSJ9.LGqE9hebumM9u3TvBM5sqcvgbQkF9Ah0S8swsf7OZlZ3QgJ9Rp6rhAglQlhvwcaVP4Dnk5VAIgrN5wf0Nuw2m1VtevTED-bTF1hS2-AjuKcXgM_QfJR-Dh8trKwB1K7w_hZhyetmFd3iOngKFJcBUik8-mO7yHP7oufpGZpAIn2pEJZS-YiUNMV6uE2L99gH_X3Dcn_c81NkjrIRQv1m55e_9jasP2BxzZGejhpmpk4.U_jP0o3RWZ0evbuI_1XxEa_a6vQQKJeoXI95U--9svg&dib_tag=se&keywords=mini%2Bcrockpot&qid=1733187121&sprefix=mini%2Bcrockpot%2Caps%2C99&sr=8-6&th=1",
    "https://www.amazon.com/dp/B0CY2JJ4WS/?coliid=I1GPOVVHZWAAOP&colid=350APNZ3CSNB4&ref_=list_c_wl_lv_vv_lig_dp_it&th=1",
    "https://www.amazon.com/WHAT-DO-YOU-MEME-Bigger/dp/B09R6FF1LY/ref=sr_1_4_sspa?crid=1KPK3NAB0D8MV&dib=eyJ2IjoiMSJ9.xT6eOre9USHCDnj-Ic2gKByXo_b7jG0iJ-VoS3noZDx9NKrVJMUjs-VkEjIoBvgq48sCGih52uTaJNVMJVa_9fM0AXueA-_gOsH8kunnRX65GskYTx9v936tbBoLGW50HH21ARrcvfSWAMnMJ7QWQ6CBGSutlh4w9sdMuJBJ-pICFSKLScH624V69gCg0swL8XPa-iNNvlDcDaytM6BAFfMWVueym4PzQj5CTdpP_pIP56xfOOR6UmXgo5UmqBfBIQzefrvNfM7jVII8733LlgdOusDQLi4ZitNBscK8UbM.2cy0ILOpDt896Z6GYDTPBP2cwZvZlCTfTd5msHEaFHY&dib_tag=se&keywords=card+games&qid=1733189119&sprefix=card+games%2Caps%2C110&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    "https://www.amazon.com/Beistle-1-Pack-Light-Up-Christmas-20742/dp/B003X82T82/ref=hw_24_h_dagw_weg?pf_rd_p=07128daf-2242-4188-b656-022307fcb338&pf_rd_r=7YN1V03NDSY6YCN4BRCX&sr=1-13-7f3c6b90-2110-4e16-b966-7f86464ee08e",
    "https://www.amazon.com/Amazon-Basics-Stainless-Barbeque-Grilling/dp/B0BBTPLB7Z/ref=sr_1_1_ffob_sspa?crid=ZSDSSYLI18N8&dib=eyJ2IjoiMSJ9._yiVcNP0OFt3Zb8s1L9cBi1Z8IRadYZoEai1V5RaWCM0uOBGC39fCTp3EIdSGKV__uxSxU93_AS165Sgflj_WMlm3rp2ZbDnNRf77lQDxY8vBnCYb7L3KlELISjGWhYv8yD16PSU9cweExBCfvIo_cGGYF-zSJRmCS1B2wDsmHHuifGEj0qe74w050m0Ctf_X02dCTxDrytYifMVW01zSIbUXkF014XimOghFNpL85s.FVM1gT0hOE3XZESDz3K3xib8Xc3mLNlgdrqr0tbnmg4&dib_tag=se&keywords=grilling%2Bset&qid=1733187434&sprefix=grilling%2Bset%2Caps%2C101&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
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
