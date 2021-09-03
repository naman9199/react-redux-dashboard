import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

export function ProfilePage() {
	const classes = useStyles();
	return <div className={classes.root}>Profile Screen</div>;
}

const useStyles = makeStyles({
	root: {
		height: '100%',
		textAlign: 'center',
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},
});
