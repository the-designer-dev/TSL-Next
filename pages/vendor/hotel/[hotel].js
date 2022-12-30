import React from "react";
import StyledContainer from "../../../styledComponents/styledContainer";
import VendorLayout from "../../../components/vendorLayout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../config";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import SmallCarouselWithThumbnail from "../../../components/smallCarouselWithThumbnails";
import FormWrapper from "../../../styledComponents/formWrapper";
import {
  Box,
  MenuItem,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import hotelImagesIcon from "../../../assets/hotelImages.png";
import hotelDetailsIcon from "../../../assets/hotelDetailsIcon.png";
import Cross from "../../../assets/cross.png";
import Plus from "../../../assets/plus.png";
import hotelLocationIcon from "../../../assets/hotelLocation.png";
import featuresAndAmenitiesIcon from "../../../assets/featuresAndAmenitiesIcon.png";
import clockIcon from "../../../assets/clockIcon.png";
import rulesIcon from "../../../assets/rulesIcon.png";
import servicesIcon from "../../../assets/servicesIcon.png";
import ShowMap from "../../../components/showMap";
import StyledButton from "../../../styledComponents/styledButton";
import StyledTextField from "../../../styledComponents/styledTextField";
import Features from "../../../components/features";
import Dropfile from "../../../components/dropzone";
import LocationPicker from "../../../components/locationPicker";
import { convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { convertToHTML } from "draft-convert";
import dynamic from "next/dynamic";
import {
  setAddress,
  setAmenities,
  setCheckIn,
  setCheckOut,
  setCity,
  setCoordinates,
  setDescription,
  setFacilities,
  setFaqs,
  setName,
  setServices,
} from "../../../redux/addHotel";
import { prevStep } from "../../../redux/formSlice";
import { TimePicker } from "@mui/lab";
import moment from "moment";
import ProvidedServices from "../../../components/providedServices";
import FAQs from "../../../components/faqs";
const MUIRichTextEditor = dynamic(() => import("mui-rte"), { ssr: false });

const fetch2 = (hotel, token) =>
  axios({
    method: "GET",
    url: `${API_URL}/hotels/${hotel}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.data);

function SingleHotel(props) {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const addHotel = useSelector((state) => state.addHotel);
  const router = useRouter();
  const dispatch = useDispatch();
  const { hotel } = router.query;
  const { data, error } = useSWR([hotel, token], fetch2);
  const [filteredData, setFilteredData] = useState(data);
  const [editActive, setEditActive] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFilteredData(data);
    dispatch(setName(data?.hotelname));
    dispatch(setCity(data?.hotelcity));
    dispatch(setAddress(data?.hoteladdress));
    dispatch(setDescription(data?.hoteldescription));
    dispatch(
      setCoordinates([{ longitude: data?.latitude, latitude: data?.longitude }])
    );
    dispatch(setFacilities(data?.facilities));
    dispatch(setAmenities(data?.amenities));
    dispatch(setFaqs(data?.faqs));
    dispatch(setServices(data?.hotel_extra_fields));
    dispatch(setCheckIn(data?.checkintime));
    dispatch(setCheckOut(data?.checkouttime));
  }, [data]);

  var citiesArr = [
    "Abbottabad",
    "Adezai",
    "Ali Bandar",
    "Amir Chah",
    "Attock",
    "Ayubia",
    "Bahawalpur",
    "Baden",
    "Bagh",
    "Bahawalnagar",
    "Burewala",
    "Banda Daud Shah",
    "Bannu district|Bannu",
    "Batagram",
    "Bazdar",
    "Bela",
    "Bellpat",
    "Bhag",
    "Bhakkar",
    "Bhalwal",
    "Bhimber",
    "Birote",
    "Buner",
    "Burj",
    "Chiniot",
    "Chachro",
    "Chagai",
    "Chah Sandan",
    "Chailianwala",
    "Chakdara",
    "Chakku",
    "Chakwal",
    "Chaman",
    "Charsadda",
    "Chhatr",
    "Chichawatni",
    "Chitral",
    "Dadu",
    "Dera Ghazi Khan",
    "Dera Ismail Khan",
    "Dalbandin",
    "Dargai",
    "Darya Khan",
    "Daska",
    "Dera Bugti",
    "Dhana Sar",
    "Digri",
    "Dina City|Dina",
    "Dinga",
    ", Pakistan|Diplo",
    "Diwana",
    "Dokri",
    "Drosh",
    "Duki",
    "Dushi",
    "Duzab",
    "Faisalabad",
    "Fateh Jang",
    "Ghotki",
    "Gwadar",
    "Gujranwala",
    "Gujrat",
    "Gadra",
    "Gajar",
    "Gandava",
    "Garhi Khairo",
    "Garruck",
    "Ghakhar Mandi",
    "Ghanian",
    "Ghauspur",
    "Ghazluna",
    "Girdan",
    "Gulistan",
    "Gwash",
    "Hyderabad",
    "Hala",
    "Haripur",
    "Hab Chauki",
    "Hafizabad",
    "Hameedabad",
    "Hangu",
    "Harnai",
    "Hasilpur",
    "Haveli Lakha",
    "Hinglaj",
    "Hoshab",
    "Islamabad",
    "Islamkot",
    "Ispikan",
    "Jacobabad",
    "Jamshoro",
    "Jhang",
    "Jhelum",
    "Jamesabad",
    "Jampur",
    "Janghar",
    "Jati(Mughalbhin)",
    "Jauharabad",
    "Jhal",
    "Jhal Jhao",
    "Jhatpat",
    "Jhudo",
    "Jiwani",
    "Jungshahi",
    "Karachi",
    "Kotri",
    "Kalam",
    "Kalandi",
    "Kalat",
    "Kamalia",
    "Kamararod",
    "Kamber",
    "Kamokey",
    "Kanak",
    "Kandi",
    "Kandiaro",
    "Kanpur",
    "Kapip",
    "Kappar",
    "Karak City",
    "Karodi",
    "Kashmor",
    "Kasur",
    "Katuri",
    "Keti Bandar",
    "Khairpur",
    "Khanaspur",
    "Khanewal",
    "Kharan",
    "kharian",
    "Khokhropur",
    "Khora",
    "Khushab",
    "Khuzdar",
    "Kikki",
    "Klupro",
    "Kohan",
    "Kohat",
    "Kohistan",
    "Kohlu",
    "Korak",
    "Korangi",
    "Kot Sarae",
    "Kotli",
    "Lahore",
    "Larkana",
    "Lahri",
    "Lakki Marwat",
    "Lasbela",
    "Latamber",
    "Layyah",
    "Leiah",
    "Liari",
    "Lodhran",
    "Loralai",
    "Lower Dir",
    "Shadan Lund",
    "Multan",
    "Mandi Bahauddin",
    "Mansehra",
    "Mian Chanu",
    "Mirpur",
    ", Pakistan|Moro",
    "Mardan",
    "Mach",
    "Madyan",
    "Malakand",
    "Mand",
    "Manguchar",
    "Mashki Chah",
    "Maslti",
    "Mastuj",
    "Mastung",
    "Mathi",
    "Matiari",
    "Mehar",
    "Mekhtar",
    "Merui",
    "Mianwali",
    "Mianez",
    "Mirpur Batoro",
    "Mirpur Khas",
    "Mirpur Sakro",
    "Mithi",
    "Mongora",
    "Murgha Kibzai",
    "Muridke",
    "Musa Khel Bazar",
    "Muzaffar Garh",
    "Muzaffarabad",
    "Nawabshah",
    "Nazimabad",
    "Nowshera",
    "Nagar Parkar",
    "Nagha Kalat",
    "Nal",
    "Naokot",
    "Nasirabad",
    "Nauroz Kalat",
    "Naushara",
    "Nur Gamma",
    "Nushki",
    "Nuttal",
    "Okara",
    "Ormara",
    "Peshawar",
    "Panjgur",
    "Pasni City",
    "Paharpur",
    "Palantuk",
    "Pendoo",
    "Piharak",
    "Pirmahal",
    "Pishin",
    "Plandri",
    "Pokran",
    "Pounch",
    "Quetta",
    "Qambar",
    "Qamruddin Karez",
    "Qazi Ahmad",
    "Qila Abdullah",
    "Qila Ladgasht",
    "Qila Safed",
    "Qila Saifullah",
    "Rawalpindi",
    "Rabwah",
    "Rahim Yar Khan",
    "Rajan Pur",
    "Rakhni",
    "Ranipur",
    "Ratodero",
    "Rawalakot",
    "Renala Khurd",
    "Robat Thana",
    "Rodkhan",
    "Rohri",
    "Sialkot",
    "Sadiqabad",
    "Safdar Abad- (Dhaban Singh)",
    "Sahiwal",
    "Saidu Sharif",
    "Saindak",
    "Sakrand",
    "Sanjawi",
    "Sargodha",
    "Saruna",
    "Shabaz Kalat",
    "Shadadkhot",
    "Shahbandar",
    "Shahpur",
    "Shahpur Chakar",
    "Shakargarh",
    "Shangla",
    "Sharam Jogizai",
    "Sheikhupura",
    "Shikarpur",
    "Shingar",
    "Shorap",
    "Sibi",
    "Sohawa",
    "Sonmiani",
    "Sooianwala",
    "Spezand",
    "Spintangi",
    "Sui",
    "Sujawal",
    "Sukkur",
    "Suntsar",
    "Surab",
    "Swabi",
    "Swat",
    "Tando Adam",
    "Tando Bago",
    "Tangi",
    "Tank City",
    "Tar Ahamd Rind",
    "Thalo",
    "Thatta",
    "Toba Tek Singh",
    "Tordher",
    "Tujal",
    "Tump",
    "Turbat",
    "Umarao",
    "Umarkot",
    "Upper Dir",
    "Uthal",
    "Vehari",
    "Veirwaro",
    "Vitakri",
    "Wadh",
    "Wah Cantt",
    "Warah",
    "Washap",
    "Wasjuk",
    "Wazirabad",
    "Yakmach",
    "Zhob",
    "Other",
  ];

  const submit = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data2 = {
      hotelname: addHotel.name,
      hoteldescription: addHotel.description,
      hoteladdress: addHotel.address,
      hotelcity: addHotel.city,
      users_permissions_user: user.id,
      daystorefund: addHotel.daysToRefund,
      checkintime: addHotel.checkIn,
      checkouttime: addHotel.checkOut,
      latitude: addHotel.coordinates[0].longitude,
      longitude: addHotel.coordinates[0].latitude,
      faqs: addHotel.faqs,
      amenities: addHotel.amenities,
      facilities: addHotel.facilities,
      Rules: addHotel.rules,
      hotel_extra_fields: addHotel.services,
      images: data.images,
    };
    formData.append("data", JSON.stringify(data2));
    files.forEach((element) => {
      formData.append("files.hotelimages", element, element.name);
    });
    axios
      .put(`${API_URL}/hotels/${hotel}`, formData, { headers: headers })
      .then((res) => {
        console.log(res);
      });
  };

  async function deleteImage(image, i) {
    console.log(image);
    data.images.splice(i, 1);
    await axios({
      method: "DELETE",
      url: `${API_URL}/upload/files/${image.id}
      `,
    });
  }

  const SSR = typeof window === "undefined";
  var contentHTML;
  var state;
  const [content, setContent] = useState("");
  useEffect(() => {
    !SSR ? (contentHTML = convertFromHTML(addHotel.description)) : "";

    !SSR
      ? (state = ContentState.createFromBlockArray(
          contentHTML.contentBlocks,
          contentHTML.entityMap
        ))
      : "";
    !SSR ? setContent(JSON.stringify(convertToRaw(state))) : "";
  }, []);
  const onEditorChange = (event) => {
    console.log(event.getCurrentContent());
    const plainText = convertToHTML(event.getCurrentContent());
    dispatch(setDescription(plainText));
  };
  var extra_services = addHotel.services;

  function updatePrice(name, price) {
    extra_services = extra_services.map((obj) => ({
      ...obj,
    }));
    extra_services[
      extra_services.findIndex((el) => {
        return el.extra_field_name === name;
      })
    ] = {
      ...extra_services[
        extra_services.findIndex((el) => {
          return el.extra_field_name === name;
        })
      ],
      extra_field_price: price,
    };
    extra_services = extra_services;
    dispatch(setServices(extra_services));
  }
  return (
    <StyledContainer square>
      <FormWrapper>
        {!editActive ? (
          <Grid container justifyContent={"flex-end"} spacing={4}>
            <Grid item justifySelf={"flex-end"}>
              <StyledButton onClick={() => setEditActive(true)}>
                Edit Hotel
              </StyledButton>
            </Grid>
            <Grid item xs={12}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={hotelImagesIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "24px" }} variant="h6">
                    Hotel Images:
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ height: "100%", maxHeight: "500px", padding: "20px" }}>
                <SmallCarouselWithThumbnail images={data?.images} />
              </Box>
            </Grid>

            <Grid container item xs={12}>
              <Grid container item xs={12} md={6} spacing={0}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={hotelDetailsIcon.src} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                      Hotel Details:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                    {data?.hotelname}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.hoteldescription,
                      }}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} md={6} spacing={0}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={hotelLocationIcon.src} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                      Location:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                      Address : {data?.hoteladdress}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                      City : {data?.hotelcity}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ShowMap
                      height={"200px"}
                      longitude={data?.latitude}
                      latitude={data?.longitude}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              <Grid container item xs={12} md={6} spacing={0}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={featuresAndAmenitiesIcon.src} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                      Features & Amenities:
                    </Typography>
                  </Grid>
                </Grid>
                {data?.amenities?.map((el) => (
                  <Grid
                    container
                    item
                    xs={6}
                    md={4}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={4}>
                      <img style={{ width: "80%" }} src={el.service_icon} />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                        {el?.service_name}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} md={6} spacing={0}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={clockIcon.src} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                      Timing Details:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                      Check In : {data?.checkintime}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                      Check Out : {data?.checkouttime}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              <Grid container item xs={12} md={6} spacing={0}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={rulesIcon.src} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                      Rules:
                    </Typography>
                  </Grid>
                </Grid>
                {data?.rules?.map((el) => (
                  <Grid
                    container
                    item
                    xs={6}
                    md={4}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={4}>
                      <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                        {el?.service_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                        {el?.service_name}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} md={6} spacing={0}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={servicesIcon.src} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                      Services & Charges:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  {data?.hotel_extra_fields?.map((el) => (
                    <Grid container item xs={6} lg={3} spacing={1}>
                      <Grid item>
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          {el.extra_field_name} :
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          {el.extra_field_price}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <form onSubmit={(e) => submit(e)}>
            <Grid container justifyContent={"flex-end"} spacing={4}>
              <Grid item xs={12}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item>
                    <img src={hotelImagesIcon.src} />
                  </Grid>
                </Grid>
                <Box
                  sx={{ height: "100%", maxHeight: "500px", padding: "20px" }}
                >
                  <Grid container item spacing={2}>
                    {data?.images.map((el, i) => (
                      <Grid item md={3} xs={12}>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              deleteImage(el, i);
                            }}
                            style={{
                              position: "absolute",
                              right: "-10px",
                              border: "unset",
                              top: "-12px",
                              padding: "0px",
                              backgroundColor: "transparent",
                            }}
                          >
                            <img
                              style={{
                                width: "20px",
                                height: "20px",

                                objectFit: "contain",
                              }}
                              src={Cross.src}
                            />
                          </button>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                            src={`${API_URL}${el.url}`}
                          />
                        </Box>
                      </Grid>
                    ))}
                    {files?.map((el, i) => (
                      <Grid item md={3} xs={12}>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <button
                            onClick={() => {
                              setFiles((files) => files.splice(i, 1));
                            }}
                            style={{
                              position: "absolute",
                              right: "-10px",
                              border: "unset",
                              top: "-12px",
                              padding: "0px",
                              backgroundColor: "transparent",
                            }}
                          >
                            <img
                              style={{
                                width: "20px",
                                height: "20px",

                                objectFit: "contain",
                              }}
                              src={Cross.src}
                            />
                          </button>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                            src={URL.createObjectURL(el)}
                          />
                        </Box>
                      </Grid>
                    ))}
                    <Grid item md={3} xs={12}>
                      <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        onChange={(e) => {
                          setFiles(Array.from(e.target.files));
                        }}
                        style={{
                          display: "none",
                        }}
                      />
                      <label
                        for="files"
                        style={{
                          border: "unset",
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#bebebe",
                          borderRadius: "8px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            objectFit: "contain",
                          }}
                          src={Plus.src}
                        />
                      </label>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid container item xs={12} lg={6} spacing={2}>
                <Grid container item spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Tell us more about your hotel
                    </Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    backgroundColor: "background.secondary",
                    p: 2,
                    borderRadius: 3,
                    m: 2,
                  }}
                >
                  <Grid container item spacing={5}>
                    <Grid container item spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <StyledTextField
                          InputLabelProps={{ shrink: true }}
                          required
                          label="Name of your hotel"
                          value={addHotel.name}
                          fullWidth
                          onChange={(e) =>
                            dispatch(setName(e.currentTarget.value))
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <StyledTextField
                          select
                          InputLabelProps={{ shrink: true }}
                          label={"Which City Is Your Hotel Located In?"}
                          required
                          value={addHotel.city}
                          fullWidth
                          onChange={(e) => dispatch(setCity(e.target.value))}
                          placeholder="Enter City"
                        >
                          {citiesArr.map((el) => (
                            <MenuItem value={el}>{el}</MenuItem>
                          ))}
                        </StyledTextField>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <StyledTextField
                          required
                          InputLabelProps={{ shrink: true }}
                          label={"Hotel Address"}
                          value={addHotel.address}
                          fullWidth
                          onChange={(e) =>
                            dispatch(setAddress(e.currentTarget.value))
                          }
                          placeholder="Enter Address"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                      <Grid item xs={12}>
                        <MUIRichTextEditor
                          required
                          defaultValue={content}
                          onChange={onEditorChange}
                          label="Hotel Description"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                container
                item
                spacing={2}
                xs={12}
                lg={6}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h6">
                    Place a pin to locate your hotel
                  </Typography>
                </Grid>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "background.secondary",
                    p: 2,
                    borderRadius: 3,
                    m: 2,
                  }}
                >
                  <Grid container item spacing={5}>
                    <Grid item xs={12}>
                      <LocationPicker />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid container item spacing={2}>
                <Grid item xs={12}>
                  <Typography fontSize={18} fontWeight={600} variant="p">
                    Tell us more about the features of your hotel:
                  </Typography>
                </Grid>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "background.secondary",
                    borderRadius: 3,
                    m: 2,
                  }}
                >
                  <Grid container item spacing={5}>
                    <Grid item xs={12}>
                      <Features />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid container item xs={12} lg={6} direction="column">
                <Grid container item spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Timings</Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    backgroundColor: "background.secondary",
                    p: 2,
                    borderRadius: 3,
                    m: 2,
                  }}
                >
                  <Grid container item spacing={5}>
                    <Grid container item xs={12} spacing={1}>
                      <Grid item xs={12}>
                        <TimePicker
                          value={moment(addHotel.checkIn, "hh:mm a")}
                          label={"Check-In time"}
                          onChange={(newValue) => {
                            newValue
                              ? dispatch(setCheckIn(newValue.format("hh:mm a")))
                              : "";
                          }}
                          renderInput={(params) => (
                            <TextField
                              required
                              placeholder="HH:MM am/pm"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  "& .MuiOutlinedInput-input": {
                                    color: "#000",
                                  },
                                  "& .MuiInputAdornment-root": {
                                    "& .MuiButtonBase-root": {
                                      "& .MuiSvgIcon-root": {
                                        color: "button.main",
                                      },
                                    },
                                  },
                                },
                                backgroundColor: "#FFF",
                                borderRadius: "5px",
                              }}
                              fullWidth
                              {...params}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                      {/* <Grid item xs={12} sm={3}>
              <Typography variant="p">Check-Out time:</Typography>
            </Grid> */}
                      <Grid item xs={12}>
                        <TimePicker
                          value={moment(addHotel.checkOut, "hh:mm a")}
                          onChange={(newValue) => {
                            newValue
                              ? dispatch(
                                  setCheckOut(newValue.format("hh:mm a"))
                                )
                              : "";
                          }}
                          label={"Check-Out time"}
                          renderInput={(params) => (
                            <TextField
                              required
                              placeholder="HH:MM am/pm"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  "& .MuiOutlinedInput-input": {
                                    color: "#000",
                                  },
                                  "& .MuiInputAdornment-root": {
                                    "& .MuiButtonBase-root": {
                                      "& .MuiSvgIcon-root": {
                                        color: "button.main",
                                      },
                                    },
                                  },
                                },
                                backgroundColor: "#FFF",
                                borderRadius: "5px",
                              }}
                              fullWidth
                              {...params}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid
                container
                item
                spacing={1}
                xs={12}
                lg={6}
                direction={"column"}
              >
                <Grid item>
                  <Typography fontWeight={600} fontSize={18} variant="p">
                    What services do you provide?
                  </Typography>
                </Grid>
                <Box
                  sx={{
                    backgroundColor: "background.secondary",
                    p: 2,
                    borderRadius: 3,
                    width: "100%",
                    m: 2,
                  }}
                >
                  <Grid container item spacing={5}>
                    <Grid item xs={6}>
                      <ProvidedServices />
                    </Grid>
                    <Grid item container xs={6}>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{
                          opacity: extra_services.find(
                            (el) => el.extra_field_name === "Breakfast"
                          )
                            ? "100%"
                            : "0%",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <StyledTextField
                            InputLabelProps={{ shrink: false }}
                            label=""
                            value={
                              extra_services.find(
                                (el) => el.extra_field_name === "Breakfast"
                              )?.extra_field_price
                            }
                            onChange={(e) =>
                              updatePrice("Breakfast", e.target.value)
                            }
                            sx={{
                              "& .MuiInputBase-root": {
                                padding: "0px",
                                "& .MuiInputAdornment-positionStart": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "4px 0px 0px 4px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                "& .MuiInputAdornment-positionEnd": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "0px 4px 4px 0px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                height: "100%",
                              },
                              height: "55px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  PKR
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  Per Person
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{
                          opacity: extra_services.find(
                            (el) => el.extra_field_name === "Lunch"
                          )
                            ? "100%"
                            : "0%",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <StyledTextField
                            InputLabelProps={{ shrink: false }}
                            label=""
                            value={
                              extra_services.find(
                                (el) => el.extra_field_name === "Lunch"
                              )?.extra_field_price
                            }
                            onChange={(e) =>
                              updatePrice("Lunch", e.target.value)
                            }
                            sx={{
                              "& .MuiInputBase-root": {
                                padding: "0px",
                                "& .MuiInputAdornment-positionStart": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "4px 0px 0px 4px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                "& .MuiInputAdornment-positionEnd": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "0px 4px 4px 0px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                height: "100%",
                              },
                              height: "55px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  PKR
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  Per Person
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{
                          opacity: extra_services.find(
                            (el) => el.extra_field_name === "HiTea"
                          )
                            ? "100%"
                            : "0%",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <StyledTextField
                            InputLabelProps={{ shrink: false }}
                            label=""
                            value={
                              extra_services.find(
                                (el) => el.extra_field_name === "HiTea"
                              )?.extra_field_price
                            }
                            onChange={(e) =>
                              updatePrice("HiTea", e.target.value)
                            }
                            sx={{
                              "& .MuiInputBase-root": {
                                padding: "0px",
                                "& .MuiInputAdornment-positionStart": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "4px 0px 0px 4px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                "& .MuiInputAdornment-positionEnd": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "0px 4px 4px 0px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                height: "100%",
                              },
                              height: "55px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  PKR
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  Per Person
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{
                          opacity: extra_services.find(
                            (el) => el.extra_field_name === "Dinner"
                          )
                            ? "100%"
                            : "0%",
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <StyledTextField
                            InputLabelProps={{ shrink: false }}
                            label=""
                            value={
                              extra_services.find(
                                (el) => el.extra_field_name === "Dinner"
                              )?.extra_field_price
                            }
                            onChange={(e) =>
                              updatePrice("Dinner", e.target.value)
                            }
                            sx={{
                              "& .MuiInputBase-root": {
                                padding: "0px",
                                "& .MuiInputAdornment-positionStart": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "4px 0px 0px 4px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                "& .MuiInputAdornment-positionEnd": {
                                  backgroundColor: "button.main",
                                  height: "100%",
                                  maxHeight: "none",
                                  borderRadius: "0px 4px 4px 0px",
                                  padding: "0px 10px",
                                  "& .MuiTypography-root": { color: "#FFF" },
                                },
                                height: "100%",
                              },
                              height: "55px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  PKR
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  Per Person
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid container item spacing={2}>
                <Grid item xs={12}>
                  <Typography fontSize={18} fontWeight={600} variant="p">
                    Frequently Asked Questions
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "background.secondary",
                      p: 2,
                      borderRadius: 3,
                      width: "100%",
                      m: 2,
                    }}
                  >
                    <FAQs />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                spacing={2}
                justifyContent="flex-end"
              >
                <Grid item>
                  <StyledButton type="submit">Submit</StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </FormWrapper>
    </StyledContainer>
  );
}

SingleHotel.getLayout = function getLayout(SingleHotel) {
  return <VendorLayout>{SingleHotel}</VendorLayout>;
};

export default SingleHotel;
