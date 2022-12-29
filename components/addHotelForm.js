import { Box, FormControl, Grid, MenuItem, Typography } from "@mui/material";
import FormWrapper from "../styledComponents/formWrapper";
import React, { useEffect, useState } from "react";
import StyledTextField from "../styledComponents/styledTextField";
import LocationPicker from "./locationPicker";
import dynamic from "next/dynamic";
import Dropfile from "./dropzone";
import Features from "./features";
import { nextStep, prevStep } from "../redux/formSlice";
import { convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { convertToHTML } from "draft-convert";
import {
  setName,
  setCity,
  setAddress,
  setDescription,
} from "../redux/addHotel";
import StyledButton from "../styledComponents/styledButton";
const MUIRichTextEditor = dynamic(() => import("mui-rte"), { ssr: false });
import { useDispatch, useSelector } from "react-redux";

function AddHotelForm(props) {
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

  const coordinates = useSelector((state) => state.addHotel.coordinates);
  const addHotel = useSelector((state) => state.addHotel);
  const dispatch = useDispatch();
  async function submit(e) {
    e.preventDefault();
    const mod = await import("./dropzone");
    console.log(mod.hotelImgs);
    if (mod.hotelImgs.length > 0 && Object.keys(coordinates[0]).length > 0) {
      dispatch(nextStep());
    } else {
      alert("fill all required fields");
    }
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
  return (
    <FormWrapper>
      <form onSubmit={submit}>
        <Grid container spacing={3}>
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
                      required
                      label="Name of your hotel"
                      value={addHotel.name}
                      fullWidth
                      onChange={(e) => dispatch(setName(e.currentTarget.value))}
                    />
                  </Grid>
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <StyledTextField
                      select
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
          <Grid container item spacing={2} xs={12} lg={6} direction="column">
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
                Hotel Images:
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
              <Grid item xs={12}>
                <Dropfile hotel={true} />
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
          <Grid container item xs={12} spacing={2} justifyContent="flex-end">
            <Grid item>
              <StyledButton type="button" onClick={() => dispatch(prevStep())}>
                Previous
              </StyledButton>
            </Grid>
            <Grid item>
              <StyledButton type="submit">Next</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
}
export default AddHotelForm;
