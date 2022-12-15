import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import {Link} from "react-router-dom";
import {Requester} from "../utils/request";
import React, { useState, useEffect, useRef } from "react";
const SignUp = () => {

	const [basePrice, setBasePrice] = useState(0)
	const [vipDiscount, setVipDiscount] = useState(0)
	const [userMult, setUserMult] = useState(0)
	const [distanceMult, setDistanceMult] = useState(0)
	const [nightMult, setNightMult] = useState(0)

	const onPress = async e => {
		e.preventDefault()
		let req = {name: "pricing_rules"}
		let fields = ['basePrice', 'vipDiscount', 'userMult', 'distanceMult', 'nightMult']
		for (const field in fields) {
			if (e.target[fields[field]].value !== "") {
				req[fields[field]] = parseFloat(e.target[fields[field]].value)
			}
			console.log(field + ":" + e.target[field].value)
		}
		const body = await Requester.updateRules(req);
		console.log(body)
		setBasePrice(body.basePrice)
		setVipDiscount(body.vipDiscount)
		setUserMult(body.userMult)
		setDistanceMult(body.distanceMult)
		setNightMult(body.nightMult)
		document.getElementById("rules").reset();
	}

	useEffect(() => {
		const fetchData = async () => {
			return Requester.getRules();
		}
		fetchData().then(body => {
			console.log(body)
			setBasePrice(body.basePrice)
			setVipDiscount(body.vipDiscount)
			setUserMult(body.userMult)
			setDistanceMult(body.distanceMult)
			setNightMult(body.nightMult)
		})
	}, []);

	return (
		<header >
			<p align='middle'>
				Update pricing rules
			</p>

			<Form id='rules' variant="dark" onSubmit={onPress} >

				<Form.Group className="mb-3">
					<Form.Label>Base price</Form.Label>
					<Form.Control type="float" name="basePrice" placeholder={basePrice} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Vip discount</Form.Label>
					<Form.Control type="float" name="vipDiscount" placeholder={vipDiscount} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Discount per amount of trips</Form.Label>
					<Form.Control type="float" name="userMult" placeholder={userMult} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Distance multiplicator</Form.Label>
					<Form.Control type="float" name="distanceMult" placeholder={distanceMult} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Night multiplicator</Form.Label>
					<Form.Control type="float" name="nightMult" placeholder={nightMult} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Update
				</Button>

			</Form>
		</header>
	)
}

export default SignUp
