
<!-- <div id="letter">#19</div> -->

<div id="hero">
	<h1>CLUB NO.19</h1>
	<h2 id="soon-text">COMING SOON</h2>
	<div id="button-container">
		<div id="container">
			<button class="learn-more" on:click={()=>{window.open("http://eepurl.com/ivUcfs","_blank")}}>
				<span class="circle" aria-hidden="true">
					<span class="icon arrow" />
				</span>
				<span class="button-text">Join the Waitlist</span>
			</button>
		</div>
	</div>
</div>
<div id="animation">
	<div class="ground">
		<div class="hill" />
		<div class="hill" />
		<div class="hill" />
		<div class="hill" />
	</div>
	<div class="green" />
	<div class="hole" />
	<div class="pole" />
	<div class="flag" />
	<div class="shot">
		<div class="ball">
			<div />
		</div>
		<div class="shadow" />
	</div>
</div>

<style lang="scss">
	#button-container {
        * {
			box-sizing: border-box;
		}
		*::before,
		*::after {
			box-sizing: border-box;
		}

		font-family: 'Montserrat', sans-serif;
		font-size: 1rem;
		line-height: 1.5;
		margin-top: 1.2rem;
		min-height: 100vh;
        z-index: 100;

		button {
			position: relative;
			display: inline-block;
			cursor: pointer;
			outline: none;
			border: 0;
			vertical-align: middle;
			text-decoration: none;
			background: transparent;
			padding: 0;
			font-size: inherit;
			font-family: inherit;
		}
		button.learn-more {
			width: 15rem;
			height: auto;
		}
		button.learn-more .circle {
			transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
			position: relative;
			display: block;
			margin: 0;
			width: 3rem;
			height: 3rem;
			background: #eee;
			border-radius: 1.625rem;
		}
		button.learn-more .circle .icon {
			transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
			background: #242423;
		}
		button.learn-more .circle .icon.arrow {
			transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
			left: 0.625rem;
			width: 1.125rem;
			height: 0.125rem;
			background: none;
		}
		button.learn-more .circle .icon.arrow::before {
			position: absolute;
			content: '';
			top: -0.25rem;
			right: 0.0625rem;
			width: 0.625rem;
			height: 0.625rem;
			border-top: 0.125rem solid #242423;
			border-right: 0.125rem solid #242423;
			transform: rotate(45deg);
		}
		button.learn-more .button-text {
			transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 0.75rem 0;
			margin: 0 0 0 1.85rem;
			color: #eee;
			font-weight: 700;
			line-height: 1.6;
			text-align: center;
			text-transform: uppercase;
		}
		button:hover .circle {
			width: 100%;
		}
		button:hover .circle .icon.arrow {
			background: #242423;
			transform: translate(1rem, 0);
		}
		button:hover .button-text {
			color: #242423;
		}

		@supports (display: grid) {
			body {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-gap: 0.625rem;
				grid-template-areas: '. main main .' '. main main .';
			}

			#container {
				grid-area: main;
				align-self: center;
				justify-self: center;
			}
		}
	}

	#letter {
		font-size: 120px;
		font-family: Helvetica;
		font-weight: Bold;
		color: rgba(18, 22, 26, 0.7);
		width: 120px;
		height: 120px;
		text-align: center;
		vertical-align: middle;
		line-height: 120px;
		position: fixed;
		top: 55%;
		left: 40%;
		margin-top: -60px;
		margin-left: -60px;
		opacity: 1;
		z-index: 15;
	}

	#description {
		position: fixed;
		bottom: 10px;
		width: 100%;
		z-index: 100;
		font-family: Helvetica;
		font-weight: 200;
		color: rgba(18, 22, 26, 0.7);
		text-align: center;
		font-size: 11px;
		letter-spacing: 1px;
	}

	#animation {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0%;
		left: 0%;
	}

	.ground {
		width: 100%;
		height: 50%;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #facb49;
		opacity: 0.6;
	}

	.ground .hill {
		width: 1000px;
		height: 1000px;
		border-radius: 1000px;
		position: absolute;
		-webkit-transform: translate(-500px, 0px);
		-moz-transform: translate(-500px, 0px);
		-ms-transform: translate(-500px, 0px);
		-o-transform: translate(-500px, 0px);
		transform: translate(-500px, 0px);
		background-color: inherit;
	}

	.ground .hill:nth-of-type(1) {
		left: 60%;
		top: -30px;
	}

	.ground .hill:nth-of-type(2) {
		left: 40%;
		top: -50px;
	}

	.ground .hill:nth-of-type(3) {
		left: 85%;
		top: -75px;
	}

	.ground .hill:nth-of-type(4) {
		left: 10%;
		top: -25px;
	}

	.green {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 700px;
		height: 500px;
		background-color: rgba(239, 248, 241, 1);
		border-radius: 500px;
		-webkit-transform: scale(1, 0.25);
		-moz-transform: scale(1, 0.25);
		-ms-transform: scale(1, 0.25);
		-o-transform: scale(1, 0.25);
		transform: scale(1, 0.25);
		margin-left: -200px;
		margin-top: -130px;
		opacity: 0.6;
	}

	.hole {
		-webkit-transform: scale(1, 0.25);
		-moz-transform: scale(1, 0.25);
		-ms-transform: scale(1, 0.25);
		-o-transform: scale(1, 0.25);
		transform: scale(1, 0.25);
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background-color: rgba(145, 175, 150, 1);
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: 150px;
		margin-top: 110px;
	}

	.pole {
		width: 5px;
		height: 837px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 100px;
		margin-top: -400px;
		margin-left: 158px;
		-webkit-transform: scale(1, 0.25);
		-moz-transform: scale(1, 0.25);
		-ms-transform: scale(1, 0.25);
		-o-transform: scale(1, 0.25);
		transform: scale(1, 0.25);
		z-index: 8;
	}

	.flag {
		border-right: 28px solid rgba(255, 114, 93, 1);
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: 130px;
		margin-top: -81px;
		z-index: 2;
		-webkit-transform-origin: right center;
		transform-origin: right center;

		animation: flag 2s cubic-bezier(0.37, 0, 0.7, 0.99) 0s infinite alternate none;
		-webkit-animation: flag 2s cubic-bezier(0.37, 0, 0.7, 0.99) 0s infinite alternate none;
	}

	.ball,
	.ball div {
		position: absolute;
		width: 9px;
		height: 9px;
		overflow: hidden;
		border-radius: 13px;
		z-index: 3;
	}

	.ball {
		top: 0%;
		left: 0%;
		animation: ballPos 6s linear 0s infinite normal none;
		-webkit-animation: ballPos 6s linear 0s infinite normal none;
	}

	.ball div {
		background-color: #fff;
		box-shadow: inset 0px -2px 2px rgba(195, 195, 195, 0.7);
		animation: ballDrop 6s ease-in 0s infinite normal none;
		-webkit-animation: ballDrop 6s ease-in 0s infinite normal none;
	}

	.shot {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		margin-top: 2px;
		margin-left: 2px;
	}

	.shadow {
		z-index: 1;
		-webkit-transform: scale(1, 0.25) translate(0px, 16px);
		-moz-transform: scale(1, 0.25) translate(0px, 16px);
		-ms-transform: scale(1, 0.25) translate(0px, 16px);
		-o-transform: scale(1, 0.25) translate(0px, 16px);
		transform: scale(1, 0.25) translate(0px, 16px);
		width: 10px;
		height: 10px;
		border-radius: 10px;
		background-color: rgba(145, 175, 150, 1);
		position: absolute;
		animation: ballShadow 6s linear 0s infinite normal none;
		-webkit-animation: ballShadow 6s linear 0s infinite normal none;
	}

	@keyframes flag {
		22% {
			-webkit-transform: skew(0deg, 4deg);
			-moz-transform: skew(0deg, 4deg);
			-ms-transform: skew(0deg, 4deg);
			-o-transform: skew(0deg, 4deg);
			transform: skew(0deg, 4deg);
		}
		100% {
			-webkit-transform: skew(0deg, -4deg);
			-moz-transform: skew(0deg, -4deg);
			-ms-transform: skew(0deg, -4deg);
			-o-transform: skew(0deg, -4deg);
			transform: skew(0deg, -4deg);
		}
		79% {
			-webkit-transform: skew(0deg, 10deg);
			-moz-transform: skew(0deg, 10deg);
			-ms-transform: skew(0deg, 10deg);
			-o-transform: skew(0deg, 10deg);
			transform: skew(0deg, 10deg);
		}
		51% {
			-webkit-transform: skew(0deg, -12deg);
			-moz-transform: skew(0deg, -12deg);
			-ms-transform: skew(0deg, -12deg);
			-o-transform: skew(0deg, -12deg);
			transform: skew(0deg, -12deg);
		}
		0% {
			-webkit-transform: skew(0deg, 11deg);
			-moz-transform: skew(0deg, 11deg);
			-ms-transform: skew(0deg, 11deg);
			-o-transform: skew(0deg, 11deg);
			transform: skew(0deg, 11deg);
		}
	}

	@-webkit-keyframes flag {
		22% {
			-webkit-transform: skew(0deg, 4deg);
			-moz-transform: skew(0deg, 4deg);
			-ms-transform: skew(0deg, 4deg);
			-o-transform: skew(0deg, 4deg);
			transform: skew(0deg, 4deg);
		}
		100% {
			-webkit-transform: skew(0deg, -4deg);
			-moz-transform: skew(0deg, -4deg);
			-ms-transform: skew(0deg, -4deg);
			-o-transform: skew(0deg, -4deg);
			transform: skew(0deg, -4deg);
		}
		79% {
			-webkit-transform: skew(0deg, 10deg);
			-moz-transform: skew(0deg, 10deg);
			-ms-transform: skew(0deg, 10deg);
			-o-transform: skew(0deg, 10deg);
			transform: skew(0deg, 10deg);
		}
		51% {
			-webkit-transform: skew(0deg, -12deg);
			-moz-transform: skew(0deg, -12deg);
			-ms-transform: skew(0deg, -12deg);
			-o-transform: skew(0deg, -12deg);
			transform: skew(0deg, -12deg);
		}
		0% {
			-webkit-transform: skew(0deg, 11deg);
			-moz-transform: skew(0deg, 11deg);
			-ms-transform: skew(0deg, 11deg);
			-o-transform: skew(0deg, 11deg);
			transform: skew(0deg, 11deg);
		}
	}

	@keyframes ballPos {
		46% {
			left: 50%;
			margin-left: 148px;
			margin-top: 110px;
			top: 50%;
		}
		47% {
		}
		47% {
		}
		43% {
			left: 50%;
			margin-left: 138px;
			margin-top: 110px;
			top: 50%;
		}
		45% {
			left: 50%;
			margin-left: 146px;
			margin-top: 110px;
			top: 50%;
		}
		30% {
			left: 50%;
			margin-left: 60px;
			margin-top: 110px;
			top: 50%;
		}
		29% {
			left: 50%;
			margin-left: 52px;
			margin-top: 105px;
			top: 50%;
		}
		47% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
		}
		28% {
			left: 50%;
			margin-left: 45px;
			margin-top: 110px;
			top: 50%;
		}
		27% {
			left: 50%;
			margin-left: 30px;
			margin-top: 92px;
			top: 50%;
		}
		26% {
			left: 50%;
			margin-left: 20px;
			margin-top: 95px;
			top: 50%;
		}
		24% {
			left: 50%;
			margin-left: -15px;
			margin-top: 85px;
			top: 50%;
		}
		22% {
			left: 50%;
			margin-left: -44px;
			margin-top: 85px;
			top: 50%;
		}
		25% {
			left: 50%;
			margin-left: 5px;
			margin-top: 110px;
			top: 50%;
		}
		23% {
			left: 50%;
			margin-left: -30px;
			margin-top: 80px;
			top: 50%;
		}
		100% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
		}
		21% {
			left: 50%;
			margin-left: -60px;
			margin-top: 110px;
			top: 50%;
		}
		16% {
			left: 50%;
			margin-left: -130px;
			margin-top: 0px;
			top: -13px;
		}
		0% {
			top: -13px;
			margin-left: 0px;
			margin-top: 0px;
			left: -20px;
		}
	}

	@-webkit-keyframes ballPos {
		46% {
			left: 50%;
			margin-left: 148px;
			margin-top: 110px;
			top: 50%;
		}
		47% {
		}
		47% {
		}
		43% {
			left: 50%;
			margin-left: 138px;
			margin-top: 110px;
			top: 50%;
		}
		45% {
			left: 50%;
			margin-left: 146px;
			margin-top: 110px;
			top: 50%;
		}
		30% {
			left: 50%;
			margin-left: 60px;
			margin-top: 110px;
			top: 50%;
		}
		29% {
			left: 50%;
			margin-left: 52px;
			margin-top: 105px;
			top: 50%;
		}
		47% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
		}
		28% {
			left: 50%;
			margin-left: 45px;
			margin-top: 110px;
			top: 50%;
		}
		27% {
			left: 50%;
			margin-left: 30px;
			margin-top: 92px;
			top: 50%;
		}
		26% {
			left: 50%;
			margin-left: 20px;
			margin-top: 95px;
			top: 50%;
		}
		24% {
			left: 50%;
			margin-left: -15px;
			margin-top: 85px;
			top: 50%;
		}
		22% {
			left: 50%;
			margin-left: -44px;
			margin-top: 85px;
			top: 50%;
		}
		25% {
			left: 50%;
			margin-left: 5px;
			margin-top: 110px;
			top: 50%;
		}
		23% {
			left: 50%;
			margin-left: -30px;
			margin-top: 80px;
			top: 50%;
		}
		100% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
		}
		21% {
			left: 50%;
			margin-left: -60px;
			margin-top: 110px;
			top: 50%;
		}
		16% {
			left: 50%;
			margin-left: -130px;
			margin-top: 0px;
			top: -13px;
		}
		0% {
			top: -13px;
			margin-left: 0px;
			margin-top: 0px;
			left: -20px;
		}
	}

	@keyframes ballShadow {
		46% {
			left: 50%;
			margin-left: 148px;
			margin-top: 110px;
			top: 50%;
			opacity: 1;
		}
		47% {
		}
		47% {
		}
		43% {
			left: 50%;
			margin-left: 138px;
			margin-top: 110px;
			top: 50%;
		}
		45% {
			left: 50%;
			margin-left: 146px;
			margin-top: 110px;
			top: 50%;
		}
		30% {
			left: 50%;
			margin-left: 60px;
			top: 50%;
			margin-top: 110px;
		}
		29% {
			left: 50%;
			margin-left: 52px;
			top: 50%;
			margin-top: 110px;
		}
		47% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
			opacity: 0;
		}
		28% {
			left: 50%;
			margin-left: 45px;
			top: 50%;
			margin-top: 110px;
		}
		27% {
			left: 50%;
			margin-left: 30px;
			top: 50%;
			margin-top: 110px;
		}
		26% {
			left: 50%;
			margin-left: 20px;
			top: 50%;
			margin-top: 110px;
		}
		24% {
			left: 50%;
			margin-left: -15px;
			top: 50%;
			margin-top: 110px;
		}
		22% {
			left: 50%;
			margin-left: -44px;
			top: 50%;
			margin-top: 110px;
		}
		25% {
			left: 50%;
			margin-left: 5px;
			top: 50%;
			margin-top: 110px;
		}
		23% {
			left: 50%;
			margin-left: -30px;
			top: 50%;
			margin-top: 110px;
		}
		100% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
			opacity: 0;
		}
		21% {
			left: 50%;
			margin-left: -60px;
			top: 50%;
			margin-top: 110px;
			opacity: 1;
		}
		16% {
			left: 50%;
			margin-left: -130px;
			top: 50%;
			margin-top: 110px;
			opacity: 1;
		}
		0% {
			top: 50%;
			margin-top: 110px;
			margin-left: 0px;
			left: -20px;
			opacity: 1;
		}
	}

	@-webkit-keyframes ballShadow {
		46% {
			left: 50%;
			margin-left: 148px;
			margin-top: 110px;
			top: 50%;
			opacity: 1;
		}
		47% {
		}
		47% {
		}
		43% {
			left: 50%;
			margin-left: 138px;
			margin-top: 110px;
			top: 50%;
		}
		45% {
			left: 50%;
			margin-left: 146px;
			margin-top: 110px;
			top: 50%;
		}
		30% {
			left: 50%;
			margin-left: 60px;
			top: 50%;
			margin-top: 110px;
		}
		29% {
			left: 50%;
			margin-left: 52px;
			top: 50%;
			margin-top: 110px;
		}
		47% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
			opacity: 0;
		}
		28% {
			left: 50%;
			margin-left: 45px;
			top: 50%;
			margin-top: 110px;
		}
		27% {
			left: 50%;
			margin-left: 30px;
			top: 50%;
			margin-top: 110px;
		}
		26% {
			left: 50%;
			margin-left: 20px;
			top: 50%;
			margin-top: 110px;
		}
		24% {
			left: 50%;
			margin-left: -15px;
			top: 50%;
			margin-top: 110px;
		}
		22% {
			left: 50%;
			margin-left: -44px;
			top: 50%;
			margin-top: 110px;
		}
		25% {
			left: 50%;
			margin-left: 5px;
			top: 50%;
			margin-top: 110px;
		}
		23% {
			left: 50%;
			margin-left: -30px;
			top: 50%;
			margin-top: 110px;
		}
		100% {
			left: 50%;
			margin-left: 152px;
			margin-top: 110px;
			top: 50%;
			opacity: 0;
		}
		21% {
			left: 50%;
			margin-left: -60px;
			top: 50%;
			margin-top: 110px;
			opacity: 1;
		}
		16% {
			left: 50%;
			margin-left: -130px;
			top: 50%;
			margin-top: 110px;
			opacity: 1;
		}
		0% {
			top: 50%;
			margin-top: 110px;
			margin-left: 0px;
			left: -20px;
			opacity: 1;
		}
	}

	@keyframes ballDrop {
		46% {
			margin-top: 0px;
		}
		47% {
			margin-top: 9px;
		}
		100% {
			margin-top: 9px;
		}
		0% {
			margin-top: 0px;
		}
	}

	@-webkit-keyframes ballDrop {
		46% {
			margin-top: 0px;
		}
		47% {
			margin-top: 9px;
		}
		100% {
			margin-top: 9px;
		}
		0% {
			margin-top: 0px;
		}
	}
	@import url(https://fonts.googleapis.com/css?family=Montserrat);
	@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
	#soon-text {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
		font-size: 3em;
		color: #eee;
		-webkit-text-shadow: 0 2px 1px rgba(255, 255, 255, 0.6), 0 0 2px rgba(255, 255, 255, 0.7);
		-moz-text-shadow: 0 2px 1px rgba(255, 255, 255, 0.6), 0 0 2px rgba(255, 255, 255, 0.7);
		text-shadow: 0 2px 1px rgba(255, 255, 255, 0.6), 0 0 2px rgba(255, 255, 255, 0.7);
		word-spacing: 16px;
	}

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 12%;
	}

	h1 {
		color: #eee;
		font-family: 'Montserrat', sans-serif;
		font-size: 8em;
	}
</style>
