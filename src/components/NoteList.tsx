import { Col, Row, Stack, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NoteList = () => {
    return (
        <Row>
            <Col>
            <h1>Notes</h1>
            </Col>
            <Col xs='auto'>
                <Stack gap={2} direction='horizontal'>
                    <Link to='/new'>
                        <Button variant='primary'> Create </Button>
                    </Link>
                    <Button variant='outline-secondary'>Edit Tags</Button>
                </Stack>
            </Col>
        </Row>
    )
}


export default NoteList