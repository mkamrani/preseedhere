import * as React from "react"
import Layout from "../components/Layout"
import '../components/index.css'

import IndexTop from '../components/IndexTop'
import IndexBenefitCardOneSided from "../components/IndexBenefitCardOneSided"
import EmptyChairs from '../images/empty-chairs-unsplash.jpg'
import Hands from '../images/hands-unsplash.jpg'
import JumpTogether from '../images/jump together-unsplash.jpg'
import Pricing from "../components/Pricing"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        <IndexTop />
        <IndexBenefitCardOneSided
          title="Find audience"
          body="Building for no audience is the risk you don't want to take!"
        >
          <img className="object-cover rounded-xl h-full w-full" src={EmptyChairs} alt=""></img>
        </IndexBenefitCardOneSided>
        <IndexBenefitCardOneSided
          title="Find investment opportunities"
          body="Finding the right startups to invest in, before anyone else is the best strategy to maximize the profit!"
          reverse={true}
        >
          <img className="object-cover rounded-xl h-full w-full" src={Hands} alt=""></img>
        </IndexBenefitCardOneSided>
        <IndexBenefitCardOneSided
          title="Find the tool you need"
          body="Being an early adopter gives you the chance to save money and get unmatched support!"
        >
          <img className="object-cover rounded-xl h-full w-full" src={JumpTogether} alt=""></img>
        </IndexBenefitCardOneSided>
        <section>
          <Pricing />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
