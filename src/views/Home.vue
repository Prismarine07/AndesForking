<script setup="">
	import { ref } from "vue";

	// Slideshow logic
	const slides = [
	{ image: "/WEBWEBW/1.jpg", title: "Clothing" },
	{ image: "/WEBWEBW/2.jpg", title: "Gadgets and Electronics" },
	{ image: "/WEBWEBW/3.jpg", title: "Toys" },
	{ image: "/WEBWEBW/4.jpg", title: "Household Items" },
	{ image: "/WEBWEBW/5.jpg", title: "Books" },
	];

	const currentIndex = ref(0);
	const currentSlide = ref(slides[currentIndex.value]);

	const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % slides.length;
	currentSlide.value = slides[currentIndex.value];
	};

	const prevSlide = () => {
	currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
	currentSlide.value = slides[currentIndex.value];
	};
</script>

<template>
	<div class="hero">
		<div class="overlay"></div>

		<!-- Floating Light Circles -->
		<div class="light-circle circle-1"></div>
		<div class="light-circle circle-2"></div>
		<div class="light-circle circle-3"></div>
		<div class="light-circle circle-4"></div>
		<div class="light-circle circle-5"></div>

		<!-- Content -->
		<div class="content">
			<!-- Left Side: Welcome Text and Button -->
			<div class="welcome-section">
				<h1>Welcome to Our Shop</h1>
				<p>Find the best deals on our garage sale!</p>
				<router-link to="/product" class="btn btn-primary">Shop Now</router-link>
			</div>

			<!-- Right Side: Slideshow -->
			<div class="slideshow-section">
				<div class="slideshow-container">
					<!-- Image -->
					<img :src="currentSlide.image" class="slide-image" alt="Slideshow Image" />

					<!-- Navigation Buttons -->
					<button class="prev" @click="prevSlide">❮</button>
					<button class="next" @click="nextSlide">❯</button>
				</div>

				<!-- Title Below Image -->
				<div class="slide-title">
					<h2>{{ currentSlide.title }}</h2>
				</div>
			</div>
		</div>
	</div>
</template>	

<style scoped="">
	/* Your existing styles */
	.hero {
	text-align: center;
	padding: 60px 20px;
	background-image: url("/src/views/img/homebg.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: white;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	}

	.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1;
	}

	.light-circle {
	position: absolute;
	width: 50px;
	height: 50px;
	background-image: url("/src/views/img/LightEx.png");
	background-size: cover;
	border-radius: 50%;
	animation: floatAround 15s infinite linear;
	z-index: 2;
	}

	.circle-1 {
	top: 10%;
	left: 10%;
	animation-delay: 0s;
	}

	.circle-2 {
	top: 30%;
	left: 70%;
	animation-delay: 0s;
	}

	.circle-3 {
	top: 50%;
	left: 20%;
	animation-delay: 0s;
	}

	.circle-4 {
	top: 70%;
	left: 80%;
	animation-delay: 0s;
	}

	.circle-5 {
	top: 90%;
	left: 40%;
	animation-delay: 0s;
	}

	.content {
	position: relative;
	z-index: 3;
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 40px;
	}

	.welcome-section {
	text-align: left;
	max-width: 500px;
	}

	.welcome-section h1 {
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 20px;
	font-family: "Poppins", sans-serif;
	animation: fadeInDown 1s ease-in-out;
	}

	.welcome-section p {
	font-size: 1.4rem;
	color: #eee;
	margin-bottom: 30px;
	font-family: "Poppins", sans-serif;
	animation: fadeInUp 1s ease-in-out;
	}

	.btn {
	display: inline-block;
	background: #ffcc00;
	color: black;
	text-decoration: none;
	padding: 15px 30px;
	font-size: 1.1rem;
	font-weight: 600;
	border-radius: 50px;
	cursor: pointer;
	transition: 0.3s;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	animation: fadeIn 1.5s ease-in-out;
	}

	.btn:hover {
	background: #e6b800;
	transform: translateY(-5px);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
	}

	.slideshow-section {
	max-width: 550px;
	width: 100%;
	}

	.slideshow-container {
	width: 100%;
	height: 300px;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.1);
	position: relative;
	}

	.slide-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 0.8s ease-in-out;
	}

	.slide-title {
	margin-top: 20px;
	padding: 10px 20px;
	background: rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	text-align: center;
	}

	.slide-title h2 {
	color: white;
	font-size: 1.8rem;
	font-weight: 600;
	margin: 0;
	}

	.prev,
	.next {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 2rem;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	padding: 10px;
	cursor: pointer;
	}

	.prev {
	left: 10px;
	}

	.next {
	right: 10px;
	}

	@keyframes fadeInDown {
	from {
	opacity: 0;
	transform: translateY(-20px);
	}
	to {
	opacity: 1;
	transform: translateY(0);
	}
	}

	@keyframes fadeInUp {
	from {
	opacity: 0;
	transform: translateY(20px);
	}
	to {
	opacity: 1;
	transform: translateY(0);
	}
	}

	@keyframes fadeIn {
	from {
	opacity: 0;
	}
	to {
	opacity: 1;
	}
	}

	@keyframes floatAround {
	0% {
	transform: translate(0, 0);
	}
	25% {
	transform: translate(20vw, -10vh);
	}
	50% {
	transform: translate(-15vw, 15vh);
	}
	75% {
	transform: translate(10vw, -5vh);
	}
	100% {
	transform: translate(0, 0);
	}
	}

	@media (max-width: 768px) {
	.content {
	flex-direction: column;
	gap: 20px;
	}

	.welcome-section {
	text-align: center;
	}

	.slideshow-section {
	max-width: 100%;
	}
	}
</style>