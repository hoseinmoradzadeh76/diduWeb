import { VTabs, VTab } from 'react-vtabs';
import{corn1} from "../img"

const Products=()=>{
    return(
        <><h2 className="titles mt-24">تاریخچه انتشار فصلنامه ها</h2>
    <div className='bg-success mt-10 rounded-2xl'>
            <VTabs
		tabContainerStyle={{display: "flex",justifyContent:"flex-End",width: 1000}}
		tabLabelStyle={{ width: 200,margin:5,backgroundColor:" #fcd34d" }}
		inkBarStyle={{ border:"1px solid #fcd34d",backgroundColor:" #15803d",borderRidues:5, width:200}}>
		<VTab label="محصولات باغی">
			<div className='flex'>
			<img className='w-16' src={corn1}/>
			<img className='w-16' src={corn1}/>
			</div>
		</VTab>
		<VTab label="محصولات زراعی">
        <div>
                <p>moradz</p>
			</div>
		</VTab>
		<VTab label="محصولات صیفی جات" >
			<div>
                <p>hodsein</p>
			</div>
		</VTab>
	</VTabs>
    </div>
    </>
    )
}
export default Products;