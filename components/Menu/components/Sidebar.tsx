import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import { Button } from 'components/Button';
import { SidebarProps } from '../types'


const Sidebar: React.FC<SidebarProps> = (props) => {
	const { menu, subMenu, isPushed, setIsPushed } = props
	return (
		<Wrapper isPushed={isPushed}>
			<Header >
				<ButtonBurger
					onClick={() => setIsPushed(false)}
					width="52px"
					height="44px"
					alt="bugger"
					src="/images/icons/burger.png"
				/>
				<ButtonHeader>
					<Button variant="secondary">Sign In</Button>
					<Button variant="primary">Sign Up</Button>
				</ButtonHeader>
			</Header>
			<Body>
				{menu.map(m => (
					<ItemMenu key={m.label}>
						<Icon
							width="20px"
							height="20px"
							alt="bugger"
							src={`/images/icons/${m.icon}.svg`}
						/>
						<Text ml={2}>{m.label}</Text>
					</ItemMenu>
				))}
				<Divide/>
				{subMenu.map(sub => (
					<ItemMenu key={sub.label}>
						<Icon
							width="20px"
							height="20px"
							alt="bugger"
							src={`/images/icons/${sub.icon}.svg`}
						/>
						<Text ml={2}>{sub.label}</Text>
					</ItemMenu>
				))}
			</Body>
		</Wrapper >
	)
}


const Wrapper = styled.div<{isPushed: boolean}>`
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 99;
	overflow: visible;
	width: 320px;
	height: 80vh;
	background: #272727;
	padding: 0;
	display: ${({ isPushed }) => isPushed ? 'block' : 'none'};
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	height: 68px;
	margin-bottom: 24px;
	padding: 14px 8px;
	width: 100%;
	flex-direction: row;
	background: #1d1d1d;
	justify-content: space-between;
`

const ButtonHeader = styled(Flex)`
	gap: 14px;
`

const ButtonBurger = styled(Image)`
	cursor: pointer;
`;

const Body = styled.div`
	height: calc(84vh - 136px);
`

const ItemMenu = styled.a`
	cursor: pointer;
	white-space: nowrap;
	position: relative;
	align-items: center;
	display: flex;
	padding: 12px 0 12px 26px;
	font-weight: bold;
	font-size: 18px;
	transition: .3s;

	&:hover {
		color: #ff004d;
	}

	&:before {

		&:hover {
			content: "";
			position: absolute;
			left: 0;
			top: 11px;
			width: 8px;
			height: 20px;
			background: #ff004d;
			box-shadow: 0 0 16px #ff004d;
		}
	}
`

const Icon = styled(Image)`
	margin: 0 12px 0 0;
	transition: .3s;
	&:hover {
		color: #ff004d;
	}
`

const Divide = styled.div`
	margin: 14px 0 24px 0;
	&:after {
		position: absolute;
		content: "";
		border-bottom: 1px solid #4b4b4b;
		width: 212px;
		left: 24px;
	}
`

export default Sidebar