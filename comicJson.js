function getComicJson() {

    return{
        "Master Volume": 1,
        "Navigation Bar Pages": 2,
        "Assets Folder": "assets",
        "Resolution":"1920x1080",
        "CSS styles": "@keyframes slideIn { from { left: 0; transform:translateX(1000px); } to { left: 0; transform:translateX(0); } }",
        "Pages": [
            {
                "Auto Next": 0,
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
            {
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
            {
                "Auto Next": 0,
                "Elements": [
                    {
                        "File": "kai.png",
                        "CSS": "opacity: 50%;",
                        "z": 0,
                        "persist": 1,
                        "delay": 0
                    }
                ]
            }
        ]
    }
}
