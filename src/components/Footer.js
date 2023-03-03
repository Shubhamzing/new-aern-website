import imgTag from '../assets/media/img-tag.svg';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal, TextField } from '@mui/material';

export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20rem',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };

    return (
        <>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Join the Waitlist
                    </Typography>
                    <div>
                        <TextField sx={{ mt: 2 }} fullWidth label="Phone Number" variant="outlined" />
                        <TextField sx={{ mt: 2 }} fullWidth label="Email" variant="outlined" />

                        <Button sx={{ mt: 2 }} variant="outlined">Submit</Button>
                    </div>
                </Box>
            </Modal>

            <div className="footer">
                <div className="footer-item-1">
                    <span className='copyright'>(C) 2023 - Alpha Earning Private Limited</span>

                </div>
                <div className="footer-item-2">
                    <img src={imgTag} className="img" />
                </div>
                {/* <div className="footer-item-3">
                    <button className='join-btn' onClick={handleOpen}>Join waitlist</button>
                </div> */}
            </div>
        </>
    );
}