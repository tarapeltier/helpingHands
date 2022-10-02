import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
import './Master.css'

const PUBLIC_KEY = "pk_live_51KcDQAJedkG02fL68INuZIGSRSSPS733patoTwBZYLfM9XeUEJgJbDCAaSfMPFTVoYUVp0vPCwm6kWPEBMeLC7NA00o6Iquaze"

const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
        <div className="stripe-container">
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>
	)
}