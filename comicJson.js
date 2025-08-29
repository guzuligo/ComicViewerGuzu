function getComicJson() {

    return{
        "Master Volume": 1,
        "Navigation Bar Pages": 2,
        "Assets Folder": "assets",
        "Resolution":"1920x1080",
        "CSS styles": `

            @keyframes slideIn { from { left: 0; transform:translateX(1000px); } to { left: 0; transform:translateX(0); } }
            @keyframes shake {
                0% { transform: translateY(110px); }
            $n: 10;
            @for $i from 1 through 9 {
                $x: 20 * (-1 + ($i % 3));
                #{$n * $i}% { transform: translateY(#{$x}px); }
            }
                100% { transform: translateY(0); }
            }
            
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
                "Audio": [
                    {
                        "File": "mp3_FondaeAudition-TaylorJo.mp3",
                        "Volume": 100,
                        "FadeIn": 0,
                        "FadeOut": 0
                    }
                ],
                "Clean": true
            }
            ,
            {//page 2
                "AutoNext": 3,
                "Elements": [
                    {
                        "File": "42 cover.png",
                        "CSS": "animation: slideIn 2s ease-in-out;",
                        "z": 0,
                        "persist": 1,
                        "delay": 0
                    }
                ]
            }
            ,
            {//page 3
                "AutoNext": 0,
                "Elements": [
                    {
                        "File": "kai.png",
                        "CSS": "opacity: 50%; animation: shake 2s linear;",
                        "z": 0,
                        "persist": 1,
                        "delay": 1
                    }
                ]
            }
        ]
    }
}
