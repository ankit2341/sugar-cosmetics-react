import { useNavigate } from "react-router-dom"

export default function BreadCrumps({name}){
    const navigate=useNavigate();
    return(
        <div className="breadcrumbs">
        <span
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          width="25"
          fill="gray"
          height="30"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="KeyboardArrowRightIcon"
        >
          <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </svg>
        <span
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate(`/${name}`)}
        >
          {name}
        </span>
      </div>
    )
}