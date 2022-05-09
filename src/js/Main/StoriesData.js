import Stories from "./Stories";

export default function StoriesData() {
	const stories = [
        {user: "9gag", image: "assets/img/9gag.svg"},
        {user: "meowed", image: "assets/img/meowed.svg"},
        {user: "barked", image: "assets/img/barked.svg"},
        {user: "wawawicomics", image: "assets/img/wawawicomics.svg"},
        {user: "respondeai", image: "assets/img/respondeai.svg"},
        {user: "filomoderna", image: "assets/img/filomoderna.svg"},
        {user: "siamusic", image: "assets/images/sia.jpg"},
        {user: "tamemeriagourmet", image: "assets/img/memeriagourmet.svg"},
    ];

	return (
		<div class="story">
			{stories.map(profile => <Stories user={profile.user} image={profile.image}/>)}
		</div>
	);
}