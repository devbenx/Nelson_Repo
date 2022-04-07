// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Root as IGetProductResponse } from '../../../types/product'
import Cors from 'cors'
import axios from 'axios'

type Data = {
  api_response: IGetProductResponse
}

export const getData = (url: string) => {
  return axios.get(url)
    .then(response => {
      // console.log(response.data)
      return response.data
    })
    .catch(err => err);
}

export const getDataMock = () => {
  const product_id = 362950;

  console.log('API Call Product loading...');

  const url = `http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_${product_id}.json`;

  return axios.get(url)
    .then(response => {
      // console.log(response.data)
      return response.data
    })
    .catch(err => err);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const product_id = 362950;

  console.log('API Call Product loading...');

  const url = `http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_${product_id}.json`;

  const response = await getData(url);
  response != undefined ? console.log(`API call Product status: SUCCES`) : console.log(`API call Product status: FAILED`);

  res.status(200).json(response)
}

// Deafult Next Function
async function handlerWithFetch(req: NextApiRequest, res: NextApiResponse<Data>) {

  const { product_id } = req.query

  const request_mainproduct = await fetch(`http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_${product_id}.json`)

  const response_product = await request_mainproduct.json() // response

  res.status(200).json(response_product)
}
