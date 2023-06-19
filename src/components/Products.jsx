import { VTabs, VTab } from 'react-vtabs';
import{n,g,h,o,R} from "../img"

const Products=()=>{
    return(
        <><h2 className="titles mt-24">تاریخچه انتشار فصلنامه ها</h2>
    <div className='bg-success mt-10 rounded-2xl h-52 flex items-center'>
            <VTabs
		tabContainerStyle={{display: "flex",justifyContent:"flex-End",width: 500,left:0}}
		tabLabelStyle={{ width: 200,margin:5,backgroundColor:" #fcd34d", }}
		inkBarStyle={{ border:"1px solid #fcd34d",backgroundColor:" #15803d",borderRidues:5, width:200}}>
		<VTab label="محصولات باغی" >
			<div className='flex'>
			<img className='product' src={n}/>
			<img className='product' src={g}/>
			<img className='product' src={h}/>
			<img className='product' src={o}/>
			<img className='product' src={R}/>
			</div>
			<div className='flex'>
			<img className='product' src={R}/>
			<img className='product' src={R}/>
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