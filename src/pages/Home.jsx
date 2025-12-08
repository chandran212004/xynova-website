import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	position: relative;
	overflow: hidden;
	
	/* Decorative elements */
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: 
			radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
			radial-gradient(circle at 80% 80%, rgba(138, 79, 162, 0.3), transparent 50%);
		pointer-events: none;
	}
`;

const HeroSection = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 100px 40px 80px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 60px;
	align-items: center;
	position: relative;
	z-index: 1;

	@media (max-width: 968px) {
		grid-template-columns: 1fr;
		padding: 80px 30px 60px;
		text-align: center;
	}
`;

const ContentSection = styled.div`
	color: white;
`;

const Title = styled.h1`
	font-size: 3.5rem;
	font-weight: 300;
	line-height: 1.2;
	margin-bottom: 30px;
	color: white;

	.highlight {
		font-weight: 700;
		display: block;
		color: #2d3748;
	}

	@media (max-width: 968px) {
		font-size: 2.5rem;
	}

	@media (max-width: 480px) {
		font-size: 2rem;
	}
`;

const Description = styled.p`
	font-size: 1.1rem;
	line-height: 1.8;
	color: rgba(255, 255, 255, 0.9);
	margin-bottom: 40px;
	max-width: 500px;

	@media (max-width: 968px) {
		max-width: 100%;
		font-size: 1rem;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;

	@media (max-width: 968px) {
		justify-content: center;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		width: 100%;
	}
`;

const PrimaryButton = styled.button`
	background: #5a67d8;
	color: white;
	padding: 14px 32px;
	border-radius: 50px;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	gap: 8px;
	border: none;
	box-shadow: 0 4px 15px rgba(90, 103, 216, 0.4);

	&:hover {
		background: #4c51bf;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(90, 103, 216, 0.5);
	}

	&::after {
		content: '›';
		font-size: 1.4rem;
		transition: transform 0.3s ease;
	}

	&:hover::after {
		transform: translateX(4px);
	}

	@media (max-width: 480px) {
		width: 100%;
		justify-content: center;
	}
`;

const ImageSection = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	
	img {
		max-width: 100%;
		height: auto;
		filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
	}

	@media (max-width: 968px) {
		order: -1;
	}
`;

export default function Home() {
	return (
		<HomeContainer>
			<HeroSection>
				<ContentSection>
					<Title>
						Web Design
						<span className="highlight">Development</span>
					</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
					</Description>
					<ButtonContainer>
						<PrimaryButton>Our Services</PrimaryButton>
					</ButtonContainer>
				</ContentSection>

				<ImageSection>
					<img 
						src="https://via.placeholder.com/600x400/5a67d8/ffffff?text=Isometric+Illustration" 
						alt="Web Development Illustration"
					/>
				</ImageSection>
			</HeroSection>
		</HomeContainer>
	);
}
