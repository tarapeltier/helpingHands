import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
import './Master.css'

const PUBLIC_KEY = "pk_test_51Kc6dFHXMr77qzvVpuOGlKvouGNS7uH7zQ7LLwzVdDaYYjysN3tABw30aUIDZITlBw3G82PqdLvRhts7y7xtPeoj001Th0fPhP"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
        <div className="stripe-container">
            <Elements stripe={stripeTestPromise}>
                <PaymentForm />
            </Elements>
        </div>
	)
}