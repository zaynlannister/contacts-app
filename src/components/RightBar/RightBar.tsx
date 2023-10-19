import React from "react";
import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { GreenButton, OrangeButton } from "../Buttons/ColoredButtons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneContact } from "../../stores/slices/contactSlice";
import { RootState } from "../../stores/store";

const RightBar = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const contact = useSelector(
    (state: RootState) => state.contactsSlice.contact
  );

  const fetchOneContact = React.useCallback(() => {
    dispatch(getOneContact(params.id));
  }, [params.id]);

  React.useEffect(() => {
    fetchOneContact();
  }, [fetchOneContact]);
  return (
    <StyledRightBarContainer
      component="div"
      className="flex-[3_3_13%] min-w-[300px] border-l border-[#cfd0d3] px-4 pt-8 h-screen"
    >
      <div className="flex flex-col items-center">
        <Avatar src={contact?.image} sx={{ width: 100, height: 100 }} />
        <p data-aos="fade-up" className="font-bold mt-2 text-center">
          {contact?.firstName} {contact?.lastName}
        </p>
      </div>
      {contact ? (
        <div className="mt-8">
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[14px] mr-2">
                <p className="text-[#7C7C7C]">Phone number</p>
                <p data-aos="fade-right">{contact?.phoneNumber}</p>
              </div>
              <div data-aos="fade-left" className="ml-4">
                <GreenButton
                  sx={{
                    width: "30px",
                    height: "30px",
                    minWidth: 0,
                    minHeight: 0,
                    padding: 0,
                  }}
                  variant="contained"
                >
                  <LocalPhoneOutlinedIcon sx={{ padding: "2px" }} />
                </GreenButton>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-[14px]">
                <p className="text-[#7C7C7C]">Email Address</p>
                <p data-aos="fade-right">{contact?.email}</p>
              </div>
              <div className="ml-6">
                <OrangeButton
                  data-aos="fade-left"
                  sx={{
                    width: "30px",
                    height: "30px",
                    minWidth: 0,
                    minHeight: 0,
                    padding: 0,
                  }}
                  variant="contained"
                >
                  <LocalPostOfficeOutlinedIcon sx={{ padding: "2px" }} />
                </OrangeButton>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p
          data-aos="fade-up"
          className="text-center text-[#bdbdbd] font-bold mt-4"
        >
          Click contact to see info!
        </p>
      )}
    </StyledRightBarContainer>
  );
};

const StyledRightBarContainer = styled(Box)({
  "@media(max-width: 905px)": {
    display: "none",
  },
});

export default RightBar;
