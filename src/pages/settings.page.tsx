import { Tabs } from 'antd'
import { NextSeo } from 'next-seo'

function SettingsPage() {
    const onChange = (key: string) => {
        console.log(key)
    }

    const items: TabsPropp['items'] = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ]

    return (
        <>
            <NextSeo title='제출 결과' />
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} />;
        </>
    )
}

export default SettingsPage
