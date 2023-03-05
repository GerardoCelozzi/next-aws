import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Installation_aws from '../../../Components/aws-amplify/Installation_aws';

export default function Docs() {
  const { query: { params = [] } } = useRouter()

  if (params[0] === 'aws' && params.length === 1) {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h1>Argomenti AWS</h1>
            <ul>
              <li>
                <Link href='/docs/aws/aws-amplify' replace>{/**secondo segmmento in prams aws-amplify */}
                  <h3>aws-amplify</h3>
                </Link>
              </li>

            </ul>
          </Col>
        </Row>
      </>
    )
  }

  if (params[1] === 'aws-amplify' && params.length === 2) {//secondo segmento aws-amplify se nn faccio il check sulla lunghezza
    //dell array entra sempre nel primo if
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Installation_aws />
          </Col>
        </Row>
      </Container>
    )

  }
  //quando non ho paramas
  return (
    <Container fluid>  
        <Row>
      lista argomenti
      <Col xs={12}>
        <Link href='/docs/aws'>
          aws
        </Link>
      </Col>
    </Row>
    </Container>

  )
}
