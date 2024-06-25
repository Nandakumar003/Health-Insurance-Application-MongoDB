import '../stylesheet/style.css'
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NHI - Home</title>
            </Helmet>
            <main>
                <div class="main-container">
                    <article class="article-styling">
                        <h2>Why Health Insurance Matters</h2>
                        <p>Health insurance provides financial protection against medical expenses. It covers hospitalization
                            costs, doctor visits, prescription drugs, and preventive care.</p>
                        <p>Without health insurance, medical bills can quickly become overwhelming, leading to financial
                            hardship.</p>
                    </article>
                    <div class="categories">
                        <h2>Types of Health Insurance Plans</h2>
                        <ul>
                            <li><a href="#HMO">Health Maintenance Organization (HMO)</a></li>
                            <li><a href="#PPO">Preferred Provider Organization (PPO)</a></li>
                            <li><a href="#EPO">Exclusive Provider Organization (EPO)</a></li>
                            <li><a href="#POS">Point of Service (POS)</a></li>
                        </ul>
                    </div>
                    <p>Each type of plan has its own network of doctors, hospitals, and other healthcare providers. It's
                        important to choose a plan that meets your needs and budget.</p>

                    <h2>How to Choose the Right Plan</h2>
                    <p>Consider factors such as premiums, deductibles, copayments, and coverage limits when selecting a health
                        insurance plan. Evaluate your healthcare needs and compare different options before making a decision.
                    </p>

                    <article class="article-styling">
                        <h2 id="HMO">Health Maintenance Organization (HMO)</h2>
                        <p>An HMO is a type of Medicare Advantage Plan (Part C) offered by a private insurance company. When you
                            have an HMO, you generally must get your care and services from doctors, other health care
                            providers, and hospitals in the plan's network, except:</p>
                        <a href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/HMO"
                            target="_blank">Read More</a>
                    </article>

                    <article class="article-styling">
                        <h2 id="PPO">Preferred Provider Organization (PPO)</h2>
                        <p>A preferred provider organization (PPO) is a health insurance plan for individuals and families. PPOs
                            involve networks that are made up of contracted medical professionals and health insurance
                            companies. Healthcare facilities and practitioners, known as preferred providers, offer services to
                            the insurer's plan policyholders at reduced rates. Plan participants receive the maximum PPO benefit
                            when they visit in-network healthcare professionals and are also offered coverage when they see
                            out-of-network providers.</p>
                        <a href="https://www.investopedia.com/terms/p/preferred-provider-organization.asp" target="_blank">Read
                            More</a>
                    </article>

                    <article class="article-styling">
                        <h2 id="EPO">Exclusive Provider Organization (EPO)</h2>
                        <p>An EPO is a type of health plan that falls somewhere between a Health Maintenance Organization (HMO)
                            and a Preferred Provider Organization (PPO) in terms of cost and flexibility. With an EPO, members
                            have only in-network coverage (except for emergencies), but they do not need to select a primary
                            care physician (PCP) or get referrals to see specialists.</p>
                        <a href="https://www.ibx.com/find-a-plan/individuals-and-families/health-insurance-basics/what-is-an-epo"
                            target="_blank">Read More</a>
                    </article>

                    <article class="article-styling">
                        <h2 id="POS">Point of Service (POS)</h2>
                        <p>A point-of-service (POS) plan is a type of managed-care health insurance plan that provides different
                            benefits depending on whether the policyholder uses in-network or out-of-network healthcare
                            providers.</p>
                        <a href="https://www.investopedia.com/terms/p/pointofservice-plan-pos.asp" target="_blank">Read More</a>
                    </article>
                </div>

            </main>
            <footer className="Footer">
                <p>&copy; 2024 <strong>Nanda Health Insurance Pvt Ltd</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;