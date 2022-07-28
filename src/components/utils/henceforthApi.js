import superagentPromise from "superagent-promise";
import _superagent from "superagent";
// import pagination from "../context/reducers/pagination";

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = "https://horsebnb.com:3001/v1/api";

const BUCKET_ROOT =
  "https://stagingacriamarket.s3.eu-central-1.amazonaws.com/uploads/"; //live
const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}images/medium/`;
const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}images/original/`;
const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}images/small/`;
const API_FILE_ROOT_AUDIO = `${BUCKET_ROOT}audio/`;
const API_FILE_ROOT_VIDEO = `${BUCKET_ROOT}video/`;
const API_FILE_ROOT_DOCUMENTS = `${BUCKET_ROOT}documents/`;

const encode = encodeURIComponent;
const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set("Authorization", `${token}`);
  }
};

const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  patch: (url, body) =>
    superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};

const Auth = {
  login: (info) => requests.post("/login", info),
  signup: (info) => requests.post("/current_user/create", info),
  updateProfile: (info) => requests.post("/current_user/update_profile", info),
  forgotPassword: (info) => requests.post("forgot-password", info),
  checkOtp: (info) => requests.post("check-email-otp", info),
  resetPassword: (info) => requests.post("reset/password", info),
  getprofile: (info, header) => requests.get("/current_user/show", info),
  changePassword: (info) => requests.put("admin/change-password", info),
  updatePassword: (info) => requests.post("/current_user/update_profile", info),
  postTitle: (info) => requests.post("/own_listings/create_draft", info),
  stallUpdate: (info) => requests.post("/own_listings/update", info),
};

// const Auth = {
//   login: (info) => requests.post("Admin/login", info),
//   signup: (info) => requests.post("signup", info),
//   forgotPassword: (info) => requests.post("forgot-password", info),
//   checkOtp: (info) => requests.post("check-email-otp", info),
//   resetPassword: (info) => requests.post("reset/password", info),
//   changePassword: (info) => requests.put("admin/change-password", info),
// };

// const Dashboard = {
//   getPagnation: (type) =>
//     requests.get(
//       `Admin/dashboard?language=ENGLISH&graph_type=${String(
//         type ? type : "WEEKLY"
//       ).toUpperCase()}&limit=10&`
//     ),
// };

// const Facility = {
//   getApprovalPagnation: (page, limit, filter) =>
//     requests.get(
//       `admin/facility/approvals?page=${page}&limit=${limit ? limit : 10}${filter ? filter : ""
//       }`
//     ),
//   getPagnation: (page, limit, filter) =>
//     requests.get(
//       `admin/facilities?page=${page}&limit=${limit ? limit : 10}${filter ? filter : ""
//       }`
//     ),
//   approvalAccept: (facility_id) =>
//     requests.put("admin/facility/approval", {
//       facility_id: facility_id,
//       status: 1,
//     }),
//   approvalDecline: (facility_id) =>
//     requests.put("admin/facility/approval", {
//       facility_id: facility_id,
//       status: 4,
//     }),
//   updateFee: (item) => requests.put("admin/facility/fees", item),
// };

// const Transaction = {
//   getPagnation: (page, limit, filter) =>
//     requests.get(
//       `admin/transactions?page=${page}&limit=${limit ? limit : 10}${filter ? filter : ""
//       }`
//     ),
// };

// const PromoCode = {
//   getPagnation: (page, limit, filter) =>
//     requests.get(
//       `admin/transactions?page=${page}&limit=${limit ? limit : 10}${filter ? filter : ""
//       }`
//     ),
//   createEndUser: (item) => requests.post("admin/promo_code", item),
// };

// const User = {
//   export: (start_date, end_date, timezone) =>
//     requests.get(
//       `Admin/users?language=ENGLISH&start_date=${start_date}&end_date=${end_date}&timezone=${timezone}`
//     ),

//   getListing: (search, pagination, limit) => {
//     return requests.get(
//       `Admin/users?language=ENGLISH${search ? `&search=${search}` : ""
//       }&pagination=${pagination}&limit=${limit}`
//     );
//   },

//   getTips: (_id, pagination) =>
//     requests.get(
//       `Admin/users/tip_history?language=ENGLISH&_id=${_id}&pagination=${pagination}&limit=10`
//     ),

//   getUserDetails: (_id) => requests.get(`Admin/users/${_id}?language=ENGLISH`),

//   manageUsers: (values) =>
//     requests.put("Admin/users", {
//       type: values.type,
//       _id: values._id,
//       is_blocked: values.is_blocked,
//       is_deleted: values.is_deleted,
//       account_status: values.account_status,
//       language: values.language,
//       admin_verified: values.admin_verified ? values.admin_verified : false,
//     }),

//   sendCredit: (info) => requests.put("admin/credit", info),
//   delete: (info) => requests.del("admin/user", info),
//   getVaultNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/users/nfts?language=ENGLISH&type=VAULT&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   // getResaleNfts: (_id, pagination) =>
//   //   requests.get(
//   //     `Admin/users/nfts?language=ENGLISH&type=ON_SALE&user_id=${_id}&pagination=${pagination}&limit=10`
//   //   ),
//   getOwnNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=OWN&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getOnSaleNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=ON_SALE&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getSoldNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=SOLD&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getCreatedNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=CREATED&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getBidNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=BIDS&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getFavNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=FAVOURITE&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getActivityNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=ACTIVITY&user_id=${_id}&pagination=${pagination}&limit=500`
//     ),
//   getCollectionsNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=COLLECTION&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getDividendsNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/user?language=ENGLISH&type=DIVIDENDS&user_id=${_id}&pagination=${pagination}&limit=10`
//     ),

//   getFollowers: (user_id, pagination, limit) =>
//     requests.get(`Admin/users/followers?user_id=${user_id}&limit=${limit ? limit : 10}&pagination=${pagination ? pagination : 0}&language=ENGLISH`),
//   getFollowings: (user_id, pagination, limit) =>
//     requests.get(`Admin/users/followings?user_id=${user_id}&limit=${limit ? limit : 10}&pagination=${pagination ? pagination : 0}&language=ENGLISH`),
// };

// const Creator = {
//   export: (start_date, end_date, timezone) =>
//     requests.get(
//       `Admin/creator?language=ENGLISH&start_date=${start_date}&end_date=${end_date}&timezone=${timezone}`
//     ),
//   reported: (_id, pagination) =>
//     requests.get(
//       `Admin/creator/reported?language=ENGLISH&_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getListing: (search, pagination) =>
//     requests.get(
//       `Admin/nfts?language=ENGLISH${search ? `&search=${search}` : ""
//       }&pagination=${pagination}&limit=10`
//     ),
//   getCreatorDetails: (_id) =>
//     requests.get(`Admin/nfts/details?${_id}&language=ENGLISH`),
//   getTips: (_id, pagination) =>
//     requests.get(
//       `Admin/users/tip_history?language=ENGLISH&_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   // getPhotos: (creatorId) =>
//   //   requests.get(`Admin/nfts/creator/${creatorId}?language=ENGLISH`),
//   getCreatedNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/creator?language=ENGLISH&type=CREATED&created_by=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getOwnNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/creator?language=ENGLISH&type=OWNED&created_by=${_id}&pagination=${pagination}&limit=10`
//     ),
//   getSoldNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/users/nfts?language=ENGLISH&type=SOLD&created_by=${_id}&pagination=${pagination}&limit=10`
//     ),
//   verifyProfile: (_id, admin_verified) =>
//     requests.put("Admin/creator", {
//       _id,
//       type: "VERIFY/UNVERIFY",
//       admin_verified: !admin_verified,
//       language: "ENGLISH",
//     }),
//   manageCreators: (values) =>
//     requests.put("Admin/creator", {
//       type: values.type,
//       _id: values._id,
//       is_blocked: values.is_blocked,
//       is_deleted: values.is_deleted,
//       admin_verified: values.admin_verified,
//       account_status: values.account_status,
//       language: values.language,
//     }),

//   getMediaList: (_id, graph_type, timezone) =>
//     // requests.get(`Admin/creator/${creatorId}?language=ENGLISH`),
//     requests.get(
//       `Admin/nfts/details?language=ENGLISH&_id=${_id}&graph_type=YEARLY&timezone=${timezone}`
//     ),

//   sendCredit: (info) => requests.put("admin/credit", info),
//   delete: (info) => requests.del("admin/user", info),
// };

// const Listing = {
//   getPagnation: (page, limit, filter) =>
//     requests.get(
//       `admin/listings?page=${page}&limit=${limit ? limit : 10}${filter ? filter : ""
//       }`
//     ),
// };

// const Administrator = {
//   getStaffMemberDetail: (id) =>
//     requests.get(`Admin/staff_members/${id}?language=ENGLISH`),

//   addStaffMembers: (values) => {
//     console.log("values", values);

//     return requests.post(`Admin/staff_members`, values);
//   },
//   blockOrDeleteStaff: (values) => requests.put("Admin/staff_members", values),

//   getStaffMembers: (values) =>
//     requests.get(
//       `Admin/staff_members?language=${values.language}&search=${values.search}&pagination=${values.page}&limit=${values.limit}`
//     ),

//   getPagnation: (page, limit, filter) =>
//     requests.get(
//       `admin/administration?page=${page}&limit=${limit ? limit : 10}${filter ? filter : ""
//       }`
//     ),
//   changeRole: (info) => requests.put("admin/role", info),

//   changePassword: (values) =>
//     requests.put("Admin/change_password", {
//       old_password: values.oldPass,
//       new_password: values.newPass,
//       language: values.language,
//     }),

//   editImgProfile: (values, image) =>
//     requests.put(`Admin/profile`, {
//       image: image,
//       name: values.name,
//       language: values.language,
//     }),

//   editProfile: (values) =>
//     requests.put(`Admin/profile`, {
//       name: values.name,
//       image: values.image,
//       language: values.language,
//     }),

//   sendNotifications: (values) => requests.post(`Admin/notification`, values),
// };

// const Staff = {
//   pagination: (page, search, role) =>
//     requests.get(
//       `Admin/staff_members?language=ENGLISH${search ? `&search=${search}` : ""
//       }${role !== "all" ? `&role=${role}` : ""}&pagination=${Number(page) - 1
//       }&limit=10`
//     ),
// };

// const Policies = {
//   all: () => requests.get(`Admin/policies?language=ENGLISH`),
//   byType: (type) =>
//     requests.get(`Admin/policies?language=ENGLISH&type=${type}`),
//   addEditPolicy: (values) => requests.post(`Admin/policies`, values),
//   delete: (id) => requests.del(`Admin/policies/${id}`),
// };

// const ContactUs = {
//   pagination: (page, search) =>
//     requests.get(
//       `Admin/contact_us?language=ENGLISH${search ? `&search=${search}` : ""
//       }&pagination=${Number(page)}&limit=6`
//     ),
//   fetchContacts: (values) =>
//     requests.get(
//       `Admin/contact_us?language=${values.language}&search=${values.search}&pagination=${values.page}&limit=${values.limit}`
//     ),

//   deleteContact: (values) => requests.put(`Admin/contact_us`, values),

//   resolveContact: (values) => requests.put(`Admin/contact_us`, values),
// };

// const Profile = {
//   get: () => requests.get(`admin/profile`),
//   getById: (id) => requests.get(`profile?id=${id}`),
//   update: (info) => requests.put(`admin/profile`, info),
// };
// const Divident = {
//   release: (info) => requests.post(`Admin/dividents/release`, info),
// };

// const Faq = {
//   addFaq: (values) => requests.post(`Admin/faqs`, values),
//   editFaq: (values) => requests.post(`Admin/faqs`, values),
//   pagination: (page, search) =>
//     requests.get(
//       `Admin/faqs?language=ENGLISH${search ? `&search=${search}` : ""
//       }&pagination=${Number(page) - 1}&limit=8`
//     ),
//   getFaqById: (values) =>
//     requests.get(`Admin/faqs?language=${values.language}&_id=${values._id}`),
//   deleteFaq: (id) => requests.del(`Admin/faqs/${id}`),
// };
// const Reports = {
//   pagination: (pagination) =>
//     requests.get(
//       `Admin/reported?language=ENGLISH&pagination=${pagination}&limit=10`
//     ),
//   getFaqById: (values) =>
//     requests.get(`Admin/reported?language=ENGLISH&_id=${values._id}`),
// };

// const Common = {
//   ethusd: () =>
//     superagent.get(
//       `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD`
//     ),
//   allUsers: (search) =>
//     requests.get(
//       `Admin/users?language=ENGLISH${search ? `&search=${search}` : ""
//       }&pagination=0&limit=10`
//     ),
//   staticData: () => requests.get(`static-data`),
//   getSales: (pagination, search) =>
//     requests.get(
//       `Admin/sales?language=ENGLISH&${search ? `&search=${search}` : ""
//       }&pagination=${pagination}&limit=10`
//     ),
//   export: (start_date, end_date, timezone) =>
//     requests.get(
//       `Admin/sales?language=ENGLISH&start_date=${start_date}&end_date=${end_date}&timezone=${timezone}`
//     ),
//   getSalesDetails: (_id, pagination) =>
//     requests.get(
//       `Admin/sales?language=ENGLISH&_id=${_id}&pagination=${pagination}&limit=10`
//     ),
//   all_languages: () => requests.get(`admin/all_languages`),
//   all_counrties: () => requests.get(`admin/all_counrties`),
//   addCountries: (name) => requests.post(`admin/countries`, { name: name }),
//   addLanguage: (name) => requests.post("admin/languages", { name: name }),
//   backupDb: (bodyData) =>
//     requests.post("Admin/backup", bodyData),
// };
// const Message = {
//   send: (items) => requests.post("admin/message", items),
// };

// const Nfts = {
//   export: (start_date, end_date, timezone) =>
//     requests.get(
//       `Admin/nfts?language=ENGLISH&start_date=${start_date}&end_date=${end_date}&timezone=${timezone}`
//     ),

//   pagination: (pagination, search) =>
//     requests.get(
//       `Admin/nfts?language=ENGLISH${search ? `&search=${search}` : ""
//       }&pagination=${pagination}&limit=9`
//     ),

//   streamingPartner: () =>
//     requests.get(
//       `Admin/stream_partner?language=ENGLISH`
//     ),
//   addeditStreamingPartner: (values) =>
//     requests.post(
//       `Admin/stream_partner`, values
//     ),



//   deletePartner: (_id) => requests.del(`Admin/stream_partner/${_id}`),

//   nftStreaming: (pagination) =>
//     requests.get(
//       `Admin/streaming?language=ENGLISH&pagination=0&limit=9`
//     ),
//   getstreamingPending: (pagination) =>
//     requests.get(
//       `Admin/streaming?language=ENGLISH&status=PENDING&pagination=0&limit=10`
//     ),
//   getstreamingAccept: (_id, pagination) =>
//     requests.get(
//       `Admin/streaming?language=ENGLISH&status=ACCEPT&pagination=${pagination}&limit=10`
//     ),
//   getBidsNfts: (_id, pagination) =>
//     requests.get(
//       `Admin/nfts/bids?_id=${_id}&language=ENGLISH&pagination=${pagination}&limit=200`
//     ),
//   getstreamingReject: (pagination) =>
//     requests.get(
//       `Admin/streaming?language=ENGLISH&status=REJECT&pagination=0&limit=10`
//     ),

//   nftStreamingDetails: (_id) =>
//     requests.get(
//       `Admin/streaming/${_id}?language=ENGLISH`
//     ),
//   dividents: () =>
//     requests.get(
//       `Admin/dividents?language=ENGLISH`
//     ),
//   payDividents: (values) =>
//     requests.post(
//       `Admin/dividents`, values
//     ),

//   dividentsDetails: (_id) =>
//     requests.get(
//       `Admin/dividents/${_id}?language=ENGLISH`
//     ),
//   dividentsUserTransaction: (_id, user_id) =>
//     requests.get(
//       `Admin/dividents/user_transaction?_id=${_id}&user_id=${user_id}&language=ENGLISH`
//     ),
//   collectionlisting: (pagination) =>
//     requests.get(
//       `collection/hot?language=ENGLISH&limit=9&pagination=${pagination}`
//     ),
//   collectionDetails: (_id) =>
//     requests.get(
//       `collection/${_id}`
//     ),
//   collectionNftDetails: (_id) =>
//     requests.get(
//       `Nft/explore?collection_id=${_id}&language=ENGLISH`
//     ),

//   getReqCollection: (pagination) =>
//     requests.get(
//       `Admin/collections/requested?language=ENGLISH&pagination=${pagination}&limit=10`

//     ),
//   reqCollectionDelete: (id) => requests.del(`Admin/collections/requested/${id}?language=ENGLISH`),

//   reqCollectionResolve: (values) => requests.put(`Admin/collections/requested`, values),

//   addCollToTrending: (values) => requests.post(`Admin/collections/trending`, values),

//   editStreaming: (values) => requests.put(`Admin/streaming`, values),




//   reports: (_id) =>
//     requests.get(`Admin/nfts/reported?language=ENGLISH&nft_id=${_id}`),
//   allReports: (_id) => requests.get(`Admin/nfts/reported?language=ENGLISH`),
//   details: (_id, graph_type, timezone) =>
//     requests.get(
//       `Admin/nfts/details?language=ENGLISH&_id=${_id}&graph_type=${String(
//         graph_type
//       ).toUpperCase()}`
//     ),
//   delete: (info) => requests.put(`Admin/nfts`, info),
//   recovery: (info) => requests.put(`Admin/nfts/recovery`, info),
// };

export default {
  // token,
  // ContactUs,
  // Divident,
  // Faq,
  // Reports,
  Auth,
  // Administrator,
  // Staff,
  // Common,
  // Profile,
  // Dashboard,
  // Facility,
  // Listing,
  // Transaction,
  // PromoCode,
  // User,
  // Policies,
  // Creator,
  // Message,
  // Nfts,
  // API_ROOT,
  // API_FILE_ROOT_SMALL,
  // API_FILE_ROOT_MEDIUM,
  // API_FILE_ROOT_ORIGINAL,
  // API_FILE_ROOT_VIDEO,
  setToken: (_token) => {
    token = _token;
  },
};
