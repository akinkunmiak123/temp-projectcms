import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: '0o6xnkmu3qt3',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESSKEY,
})

const fetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projectList = response.items.map((project) => {
        const { url, title, image } = project.fields
        const id = project.sys.id
        const img = image?.fields?.file?.url
        return { title ,url,img,id}
      })
      setProjects(projectList);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return {loading,projects}
}

export default fetchProjects