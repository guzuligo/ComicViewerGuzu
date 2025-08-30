comicJson={
    "Master Volume": 1,
    "Navigation Bar Pages": 2,
    "Assets Folder": "assets",
    "Resolution":"1920x1080",
    "CSS styles": `

        @keyframes slideIn { from {  transform:translateX(1000px); } to { transform:translateX(0); } }
        
    `,
    "Pages": [
        {//page 1
            "AutoNext": 0,
            "Elements": [
                {
                    "File": "kai.png",
                    "CSS": "",
                    "z": 0,
                    "persist": 1,
                    "delay": 0
                }
            ],
            
            "Clean": true
        }//
        ,
        {//page 2
            "AutoNext": 1,
            "Elements": [
                {
                    "File": "42 cover.png",
                    "CSS": "animation: upSlide 0.5s ease-out; left: 200px;",
                    "z": 0,
                    "persist": 2,
                    "delay": 0
                }
            ],
            "Audio": [
                {
                    "File": "mp3_FondaeAudition-TaylorJo.mp3",
                    "Volume": 100,
                    "FadeIn": 0,
                    "FadeOut": 0,
                    "persist": 2,
                }
            ],
        }//
        ,
        {//page 3
            //"AutoNext": 1,
            "Elements": [
                {
                    "File": "kai.png",
                    "CSS": "opacity: 50%; animation: shake 0.85s linear;",
                    "z": 0,
                    "persist": 1,
                    //"delay": 0.2
                }
            ]
        }//
        ,
        {//page 4
            "AutoNext": 0,
            "Elements": [
                {
                    "File": "wisp notes.png",
                    "CSS": "opacity: 50%; animation: slideIn 2s linear;",
                    "z": 0,
                    "persist": 1,
                    "delay": 1
                }
            ]
        }//
    ]
}

