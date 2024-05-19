import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Member = (props) => {

    const {id, memberName, memberEmail} = props.member;    

    return (
        <Card>
            <Card.Body>
                <Card.Title>{memberName}</Card.Title>
                <Card.Text>{memberEmail}</Card.Text>
                <Link to={"/memberDetail/" + id} className="btn btn-primary"> {/* 링크가 있는 버튼 */}
                    상세보기
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Member