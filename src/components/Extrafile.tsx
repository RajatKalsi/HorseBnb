import React from "react";

function Extrafile() {
  return (
    <div>
      {/* //         <section className="section-spacing">
//         <div className="container">
//           <div className="advantage-wrapper">
//             {language_contant.Lyb.advanceTier()}
//             <ul class="nav nav-pills mb-4 tier-buttons scrollbar flex-nowrap" id="pills-tab" role="tablist">
//               <li class="nav-item" role="presentation">
//                 <button class="nav-link tier-btn text-nowrap active mb-2" id="pills-tier0-tab" data-bs-toggle="pill" data-bs-target="#pills-tier0" type="button" role="tab" aria-controls="pills-tier0" aria-selected="true">Tier 0</button>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <button class="nav-link tier-btn text-nowrap mb-2" id="pills-tier1-tab" data-bs-toggle="pill" data-bs-target="#pills-tier1" type="button" role="tab" aria-controls="pills-tier1" aria-selected="false">Tier 01</button>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <button class="nav-link tier-btn text-nowrap mb-2" id="pills-tier2-tab" data-bs-toggle="pill" data-bs-target="#pills-tier2" type="button" role="tab" aria-controls="pills-tier2" aria-selected="false">Tier 02</button>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <button class="nav-link tier-btn text-nowrap mb-2" id="pills-tier3-tab" data-bs-toggle="pill" data-bs-target="#pills-tier3" type="button" role="tab" aria-controls="pills-tier3" aria-selected="false">Tier 03</button>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <button class="nav-link tier-btn text-nowrap mb-2" id="pills-tier4-tab" data-bs-toggle="pill" data-bs-target="#pills-tier4" type="button" role="tab" aria-controls="pills-tier4" aria-selected="false">Tier 04</button>
//               </li>
//               <li class="nav-item" role="presentation">
//                 <button class="nav-link tier-btn text-nowrap mb-2" id="pills-tier5-tab" data-bs-toggle="pill" data-bs-target="#pills-tier5" type="button" role="tab" aria-controls="pills-tier5" aria-selected="false">Tier 05</button>
//               </li>
//             </ul>
// 2:50
// <div class="tab-content" id="pills-tabContent">
//               <div class="tab-pane fade show active" id="pills-tier0" role="tabpanel" aria-labelledby="pills-tier0-tab">
//                 <div className="row">
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card staked me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? "LYB stakés " : 'LYB staked'}</p>
//                       <h3 className="mb-0">0</h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card APY me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? "Rendement du staking (APY) " : 'Staking APY'}</p>
//                       <h3 className="mb-0">5%</h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card Referral me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? " Part des frais d’affiliation" : 'Referral rate'}</p>
//                       <h3 className="mb-0">0 </h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card tickets me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? "Tickets d’IEO " : 'IEO tickets'}</p>
//                       <h3 className="mb-0">0</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="tab-pane fade" id="pills-tier1" role="tabpanel" aria-labelledby="pills-tier1-tab">
//                 <div className="row">
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card staked me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? "LYB stakés " : 'LYB staked'}</p>
//                       <h3 className="mb-0">100</h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card APY me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? "Rendement du staking (APY) " : 'Staking APY'}</p>
//                       <h3 className="mb-0">7%</h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card Referral me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? " Part des frais d’affiliation" : 'Referral rate'}</p>
//                       <h3 className="mb-0">0% </h3>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6 col-xs-6 px-2 mb-lg-0 mb-3">
//                     <div className="ad-card tickets me-3">
//                       <p className={`${(lang == 'other') ? "french" : "mb-5"}`}>{lang == 'other' ? "Tickets d’IEO " : 'IEO tickets'}</p>
//                       <h3 className="mb-0">0</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>





 */}
      <div className="container">
        <h3>Tabs With Dropdown Menu</h3>
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="d">Home</a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="d">
              Menu 1 <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="d">Submenu 1-1</a>
              </li>
              <li>
                <a href="e">Submenu 1-2</a>
              </li>
              <li>
                <a href="s">Submenu 1-3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="f">Menu 2</a>
          </li>
          <li>
            <a href="d">Menu 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Extrafile;
