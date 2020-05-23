import React, {useState} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardsActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
    background-color: #efeeee;
    width:22%;
    display:inline-block;
    margin-right:40px;
    margin-bottom: 8px;
    border-radius: 5px;
    box-shadow: ${(props) => (props.isDragging ? '0px 5px 5px rgba(0,0,0,0.3)' : 'none')};
    word-wrap: break-word;
`;
function ArchiveCard(props) {
    const { text, id, index, completed, emoji } = props;
    const [hover, setHover] = useState(false);

    const handleDelete = () => {
        const { dispatch, id } = props;
        dispatch(deleteCard(id));
        
    };
    const handleHover = () => {
        setHover(true);
    };

    const handleHoverLeave = () => {
        setHover(false);
    };
    

    return (
        <Container>
            <div onMouseOver={handleHover} onMouseOut={handleHoverLeave} style={{boxShadow: 'rgba(255, 255, 255, 0.5) -6px -6px 16px, rgba(209, 205, 199, 0.5) 6px 6px 16px', marginBottom:'20px',transform: hover && 'translateY(-10px)',transition:'all 0.2s'}}>
                <CardContent style={{marginBottom:'-20px'}}>
                    <Typography
                        gutterBottom
                        style={{
                            opacity: completed && '0.2',
                            transition: 'all 0.2s',
                        }}
                    >
                        {text}
                    </Typography>
                </CardContent>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                    <span style={{fontSize:'1.5rem',marginLeft:'8px'}}>{emoji}</span>
                    <IconButton onClick={handleDelete} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </div>
                </div>
        </Container>
    )
}
export default connect()(ArchiveCard);
