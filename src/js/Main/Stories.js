export default function Stories(props){
    return(
        <div class="stories-container">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            <div class="stories">
                <div class="stories-perfil">
                    <img src={props.image}/>
                </div>
                <div class="nome-stories">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

function StoriesData() {
	const stories = [
        {
            name: "adele",
            image: "assets/images/adele.jpg",
        },
        {
            name: "jorgeemateus",
            image: "assets/images/jorge-e-mateus",
        },
        {
            name: "anitta",
            image: "assets/images/anitta-perfil.jpeg",
        },
        {
            name: "rihanna",
            image: "assets/images/rihanna-perfil.jpg",
        },
        {
            name: "brunomars",
            image: "assets/images/bruno-mars-perfil.jpg",
        },
        {
            name: "theweeknd",
            image: "assets/images/the-weeked.jpg",
        },
        {
            name: "siamusic",
            image: "assets/images/sia.jpg"
        },
        {
            name: "taylorswift",
            image: "assets/images/tawlor-swft.jpg",
        }
    ];

	return (
		<div class="nome-stories">
			{stories.map(profile => <Stories name={profile.name} image={profile.image}/>)}
		</div>
	);
}