import React from "react"
import {AppBar, IconButton, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },
    whiteColored: {
        color: "white"
    }
}))

export const Header: React.FC<{currentLocation: string}> = ({children,currentLocation}) => {
    const d = useDispatch()
    const classes = useStyles()
    return <AppBar position={"static"}>
        <Toolbar>
            {(!currentLocation.includes('/content/all_currencies')) ? <NavLink to={'/content/all_currencies'}>
                <Link component={"button"} color={'initial'}>
                    Show All currencies
                </Link>
            </NavLink>:
            <NavLink to={'/content/currency_converter'}>
                <Link component={"button"} color={'initial'}>
                    Show currency converter
                </Link>
            </NavLink>}
            <Typography className={classes.typographyStyles}>
                {children}
            </Typography>
            {/*.{/*</span>*/}
        </Toolbar>
    </AppBar>
}